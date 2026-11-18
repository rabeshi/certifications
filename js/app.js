(() => {
  'use strict';

  const BANK = window.AI103_QUESTIONS || [];
  const GUIDE = window.AI103_TUTORIAL || [];
  const G = window.AI103_GRADING;
  const HINTS = window.AI103_HINTS || {};
  const EXAMPLES = window.AI103_EXAMPLES || {};
  const KEY = 'ai103QuizLab.v3';
  const TARGET = 70; // practice pass target, %
  const byId = new Map(BANK.map(q => [q.id, q]));
  const moduleById = new Map(GUIDE.map(m => [m.id, m]));
  const TOPIC_MODULES = GUIDE.filter(m => m.id !== 'overview');
  const questionsIn = id => BANK.filter(q => q.module === id);

  const app = document.getElementById('app');
  const scorebar = document.getElementById('scorebar');

  // ---------- state ----------
  // Bump BANK_EDITION whenever a new PDF edition renumbers questions, and add the id mapping below.
  const BANK_EDITION = 2;
  const blank = () => ({ edition: BANK_EDITION, completed: {}, flagged: {}, history: [], bestScore: 0, learn: null, exam: null, review: null, read: {}, prefs: { liveScore: false } });
  // Edition 1 -> 2 (Final Updated.pdf): the Contoso case study moved from 166-175 to 186-196 (195 is new).
  const CASE_MOVE = { 166: 186, 167: 187, 168: 188, 169: 189, 170: 190, 171: 191, 172: 192, 173: 193, 174: 194, 175: 196 };
  const remapIds = (o, fn) => Object.fromEntries(Object.entries(o || {}).map(([id, v]) => [fn(Number(id)), v]));
  let state = load();
  save(); // persist any migration immediately

  function load() {
    let s = blank();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        s = { ...s, edition: 1, ...JSON.parse(raw) };
        if (s.edition < 2) {
          // Saved ids 166-175 now point at new questions; move them and drop sessions built on the old numbering.
          const fn = id => CASE_MOVE[id] || id;
          s = { ...s, edition: 2, completed: remapIds(s.completed, fn), flagged: remapIds(s.flagged, fn), learn: null, exam: null, review: null };
        }
      } else {
        // Oldest bank numbering: questions 148+ moved down by 18, then the case study moved again in edition 2.
        const old = JSON.parse(localStorage.getItem('ai103QuizLab.v2') || 'null');
        if (old) {
          const fn = id => { const v1 = id >= 148 ? id + 18 : id; return CASE_MOVE[v1] || v1; };
          s = { ...s, completed: remapIds(old.completed, fn), flagged: remapIds(old.flagged, fn), history: old.history || [], bestScore: old.bestScore || 0 };
        }
      }
    } catch { /* storage unavailable or corrupt: start fresh */ }
    delete s.test;
    for (const m of ['learn', 'exam', 'review']) if (s[m] && (!s[m].mode || !Array.isArray(s[m].ids) || s[m].ids.some(id => !byId.has(id)))) s[m] = null;
    s.prefs = { ...blank().prefs, ...(s.prefs || {}) };
    s.read = s.read || {};
    return s;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ } }

  // ---------- helpers ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  const clock = ms => {
    const t = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
  };
  // The PDF wraps lines at a fixed width; join wrapped lines back into paragraphs but keep lists and short lines.
  const reflow = text => String(text ?? '').split('\n').reduce((out, line) => {
    const prev = out[out.length - 1];
    const startsItem = /^\s*(?:[A-H]\.|•|-|\d+\.|Statement\b|Step\b)/.test(line);
    if (prev !== undefined && prev.length >= 75 && !/[.:?!]$/.test(prev.trim()) && line.trim() && !startsItem) out[out.length - 1] = prev.trimEnd() + ' ' + line.trim();
    else out.push(line);
    return out;
  }, []).join('\n');
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2600);
  }
  function mastery(ids) {
    let correct = 0, tried = 0;
    ids.forEach(id => { if (state.completed[id] !== undefined) { tried++; if (state.completed[id]) correct++; } });
    return { correct, tried, total: ids.length };
  }
  const bar = (value, total, cls = '') => `<div class="meter ${cls}" role="img" aria-label="${value} of ${total}"><i style="width:${pct(value, total)}%"></i></div>`;
  const topicOptions = (selected = 'all') => `<option value="all">All topics (${BANK.length})</option>` +
    TOPIC_MODULES.map(m => `<option value="${m.id}" ${selected === m.id ? 'selected' : ''}>${esc(m.title)} (${questionsIn(m.id).length})</option>`).join('');

  // ---------- routing ----------
  let timer = null;
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  function route() {
    clearInterval(timer); timer = null;
    const [, view = '', arg] = (location.hash || '#/').split('/');
    document.body.dataset.view = view || 'home';
    $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === (view || 'home')));
    scorebar.hidden = true;
    window.scrollTo(0, 0);
    if (view === 'guide') return arg ? guideModule(arg) : guideIndex();
    if (view === 'learn' && state.learn && state.learn.done && arg === 'summary') return learnSummary();
    if (view === 'learn' && state.learn && !state.learn.done) return renderQuestion('learn');
    if (view === 'exam' && state.exam && !state.exam.results) return renderQuestion('exam');
    if (view === 'results' && state.exam && state.exam.results) return results();
    if (view === 'review' && state.review) return renderQuestion('review');
    home();
    if (view === 'learn' || view === 'exam') { const el = document.getElementById(view + '-setup'); if (el) el.scrollIntoView({ block: 'start' }); }
  }

  // ---------- sessions ----------
  function newSession(mode, ids, opts = {}) {
    const s = { mode, ids, index: 0, answers: {}, checked: {}, log: [], order: {}, chips: {}, random: !!opts.random, startedAt: Date.now(), limitMin: opts.limitMin || 0, label: opts.label || 'All topics' };
    if (s.random) ids.forEach(id => { const q = byId.get(id); if (q.options.length && ['single', 'multiple'].includes(q.type)) s.order[id] = shuffle(q.options.map(o => o.id)); });
    state[mode] = s;
    if (mode === 'exam') state.review = null;
    save();
    go('#/' + mode);
  }

  function startFromForm(mode, form) {
    const fd = new FormData(form);
    const topic = fd.get('topic');
    let pool = topic === 'all' ? [...BANK] : questionsIn(topic);
    if (fd.get('unanswered')) pool = pool.filter(q => state.completed[q.id] === undefined);
    if (fd.get('missed')) pool = pool.filter(q => state.flagged[q.id] || state.completed[q.id] === false);
    if (!pool.length) return toast('No questions match those filters.');
    const random = !!fd.get('random');
    if (random) pool = shuffle(pool);
    const count = fd.get('count');
    const n = count === 'all' ? pool.length : Math.min(Number(count), pool.length);
    const label = topic === 'all' ? 'All topics' : moduleById.get(topic).title;
    if (mode === 'exam' && state.exam && !state.exam.results && !confirm('Discard the exam in progress and start a new one?')) return;
    newSession(mode, pool.slice(0, n).map(q => q.id), { random, label, limitMin: Number(fd.get('limit') || 0) });
  }

  // ---------- home ----------
  function home() {
    const m = mastery(BANK.map(q => q.id));
    const flagged = Object.keys(state.flagged).length;
    const last = state.history.slice(-5).reverse();
    const resume = [];
    if (state.learn && !state.learn.done) resume.push(`<div class="resume"><div><strong>Learning session in progress</strong><span>${esc(state.learn.label)} · question ${state.learn.index + 1} of ${state.learn.ids.length}</span></div><a class="btn" href="#/learn">Resume</a></div>`);
    if (state.exam && !state.exam.results) resume.push(`<div class="resume"><div><strong>Exam in progress</strong><span>${esc(state.exam.label)} · ${answeredCount(state.exam)} of ${state.exam.ids.length} answered</span></div><a class="btn" href="#/exam">Resume exam</a></div>`);

    app.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">AI-103 · Developing AI apps and agents on Azure</p>
          <h1>Study it, practise it, then sit a mock exam.</h1>
          <p class="lede">${BANK.length} questions from the updated practice bank, a study guide covering each Azure AI service on the exam, and a live score bar in both learning and exam mode.</p>
          <div class="row">
            <a class="btn" href="#/guide">Open the study guide</a>
            <a class="btn secondary" href="#/learn">Start practising</a>
          </div>
        </div>
        <div class="stat-grid">
          <div class="stat"><b>${m.tried}<small>/${m.total}</small></b><span>Questions attempted</span></div>
          <div class="stat"><b>${m.tried ? pct(m.correct, m.tried) + '%' : '–'}</b><span>Accuracy</span></div>
          <div class="stat"><b>${state.history.length ? state.bestScore + '%' : '–'}</b><span>Best exam</span></div>
          <div class="stat"><b>${flagged}</b><span>Flagged</span></div>
        </div>
      </section>
      ${resume.join('')}
      <section class="setup-grid">
        <form class="card setup" id="learn-setup">
          <div class="setup-head"><span class="mode-icon learn" aria-hidden="true">L</span><div><h2>Learning mode</h2><p class="muted">Instant feedback and a full explanation after every answer.</p></div></div>
          <fieldset class="seg"><legend>Questions</legend>${[10, 20, 50, 'all'].map((n, i) => `<label><input type="radio" name="count" value="${n}" ${i === 1 ? 'checked' : ''}><span>${n === 'all' ? 'All' : n}</span></label>`).join('')}</fieldset>
          <label class="field-label">Topic<select name="topic">${topicOptions()}</select></label>
          <div class="checks">
            <label class="check"><input type="checkbox" name="random"> Shuffle questions and options</label>
            <label class="check"><input type="checkbox" name="unanswered"> Only questions I haven't tried</label>
            <label class="check"><input type="checkbox" name="missed"> Only missed or flagged questions</label>
          </div>
          <button class="btn block" type="submit">Start learning</button>
        </form>
        <form class="card setup" id="exam-setup">
          <div class="setup-head"><span class="mode-icon exam" aria-hidden="true">E</span><div><h2>Exam mode</h2><p class="muted">Timed, no hints. See your score and topic breakdown at the end.</p></div></div>
          <fieldset class="seg"><legend>Questions</legend>${[20, 50, 'all'].map((n, i) => `<label><input type="radio" name="count" value="${n}" ${i === 1 ? 'checked' : ''}><span>${n === 'all' ? 'All ' + BANK.length : n}</span></label>`).join('')}</fieldset>
          <fieldset class="seg"><legend>Time limit</legend>${[[0, 'None'], [60, '60 min'], [100, '100 min'], [120, '120 min']].map(([v, l]) => `<label><input type="radio" name="limit" value="${v}" ${v === 100 ? 'checked' : ''}><span>${l}</span></label>`).join('')}</fieldset>
          <label class="field-label">Topic<select name="topic">${topicOptions()}</select></label>
          <div class="checks"><label class="check"><input type="checkbox" name="random" checked> Shuffle questions and options</label></div>
          <button class="btn block" type="submit">Start exam</button>
        </form>
      </section>
      <section class="card">
        <div class="card-head"><h2>Topic mastery</h2><a href="#/guide">Study guide →</a></div>
        <div class="mastery">
          ${TOPIC_MODULES.map(mod => {
            const mm = mastery(questionsIn(mod.id).map(q => q.id));
            return `<div class="mastery-row">
              <a href="#/guide/${mod.id}" class="mastery-name"><span class="badge sm">${esc(mod.badge)}</span>${esc(mod.title)}</a>
              ${bar(mm.correct, mm.total, 'good')}
              <span class="muted nowrap">${mm.correct}/${mm.total} correct</span>
              <button class="btn small secondary" data-practice="${mod.id}">Practise</button>
            </div>`;
          }).join('')}
        </div>
      </section>
      ${last.length ? `<section class="card"><h2>Recent exams</h2><ul class="history">${last.map(h => `<li><span class="score-pill ${h.score >= TARGET ? 'good' : 'bad'}">${h.score}%</span><span>${h.correct}/${h.total} correct${h.label ? ' · ' + esc(h.label) : ''}</span><span class="muted">${new Date(h.date).toLocaleString()}</span></li>`).join('')}</ul></section>` : ''}
      <div class="footer-actions"><button class="btn ghost danger" id="reset">Reset all progress</button></div>`;

    $('#learn-setup').onsubmit = e => { e.preventDefault(); startFromForm('learn', e.target); };
    $('#exam-setup').onsubmit = e => { e.preventDefault(); startFromForm('exam', e.target); };
    $$('[data-practice]').forEach(b => b.onclick = () => practiseModule(b.dataset.practice));
    $('#reset').onclick = () => {
      if (!confirm('Reset all progress, flags and exam history? This cannot be undone.')) return;
      state = blank(); save(); toast('Progress reset.'); route();
    };
  }

  function practiseModule(id) {
    const mod = moduleById.get(id);
    newSession('learn', questionsIn(id).map(q => q.id), { label: mod.title });
  }

  // ---------- study guide ----------
  function guideIndex() {
    const read = Object.keys(state.read).length;
    app.innerHTML = `
      <nav class="crumbs"><a href="#/">Home</a><span>/</span>Study guide</nav>
      <section class="guide-hero">
        <h1>Study guide</h1>
        <p class="lede">Short, practical modules: what each Azure AI service is for, the settings the exam asks about, and the clue words that point to the right answer. Each module ends with practice on exactly its own questions.</p>
        <p class="muted">${read} of ${GUIDE.length} modules read</p>
      </section>
      <div class="module-grid">
        ${GUIDE.map((m, i) => {
          const ids = questionsIn(m.id).map(q => q.id), mm = mastery(ids);
          return `<a class="module-card ${i === 0 ? 'featured' : ''}" href="#/guide/${m.id}">
            <span class="badge">${esc(m.badge)}</span>
            <h3>${esc(m.title)}</h3>
            <p>${esc(m.tagline)}</p>
            <div class="mc-foot">
              <span>${ids.length ? plural(ids.length, 'question') : 'Overview'}</span>
              ${state.read[m.id] ? '<span class="read-tag">✓ Read</span>' : ''}
            </div>
            ${ids.length ? bar(mm.correct, mm.total, 'good thin') : ''}
          </a>`;
        }).join('')}
      </div>`;
  }

  function exampleHtml(ex) {
    if (!ex) return '';
    return `<section class="example" aria-labelledby="ex-title">
      <p class="eyebrow">Real-world example</p>
      <h2 id="ex-title">${esc(ex.title)}</h2>
      <p class="ex-setting">${fmt(ex.setting)}</p>
      <ol class="ex-rows">
        <li class="ex-head" aria-hidden="true"><span>They need to…</span><span>So they use…</span><span>Because…</span></li>
        ${ex.rows.map(([need, use, why]) => `<li>
          <span class="ex-need"><small>Need</small>${fmt(need)}</span>
          <span class="ex-use"><small>Use</small>${fmt(use)}</span>
          <span class="ex-why"><small>Why</small>${fmt(why)}</span>
        </li>`).join('')}
      </ol>
    </section>`;
  }

  function guideModule(id) {
    const m = moduleById.get(id);
    if (!m) return go('#/guide');
    const i = GUIDE.indexOf(m), prev = GUIDE[i - 1], next = GUIDE[i + 1];
    const ids = questionsIn(m.id).map(q => q.id);
    const mm = mastery(ids);
    app.innerHTML = `
      <nav class="crumbs"><a href="#/">Home</a><span>/</span><a href="#/guide">Study guide</a><span>/</span>${esc(m.title)}</nav>
      <article class="module">
        <header class="module-head">
          <span class="badge lg">${esc(m.badge)}</span>
          <div>
            <h1>${esc(m.title)}</h1>
            <p class="lede">${esc(m.tagline)}</p>
          </div>
        </header>
        <p class="intro">${fmt(m.intro)}</p>
        ${m.diagram ? `<figure class="flow"><figcaption>${esc(m.diagram.title)}</figcaption><ol>${m.diagram.steps.map((s, n) => `<li><span class="step-n">${n + 1}</span><b>${fmt(s.t)}</b><span>${fmt(s.d)}</span></li>`).join('')}</ol></figure>` : ''}
        ${exampleHtml(EXAMPLES[m.id])}
        <section>
          <h2>Services at a glance</h2>
          <div class="table-wrap"><table class="svc"><thead><tr><th>Service / feature</th><th>Use it for</th></tr></thead><tbody>
            ${m.services.map(([n, u]) => `<tr><th scope="row">${fmt(n)}</th><td>${fmt(u)}</td></tr>`).join('')}
          </tbody></table></div>
        </section>
        ${m.points.map(p => `<section><h2>${esc(p.h)}</h2><ul class="points">${p.items.map(t => `<li>${fmt(t)}</li>`).join('')}</ul></section>`).join('')}
        <section>
          <h2>Exam clue words</h2>
          <div class="table-wrap"><table class="clues"><thead><tr><th>If the question says…</th><th>Think…</th></tr></thead><tbody>
            ${m.tips.map(([a, b]) => `<tr><td>${fmt(a)}</td><td>${fmt(b)}</td></tr>`).join('')}
          </tbody></table></div>
        </section>
        ${m.figures.length ? `<section><h2>Screenshots</h2><p class="muted">Exhibits from the practice bank. Select an image to enlarge it.</p><div class="shots">${m.figures.map(f => `
          <figure class="shot"><button class="zoom" data-zoom="${esc(f.src)}" aria-label="Enlarge: ${esc(f.caption)}"><img src="${esc(f.src)}" alt="${esc(f.caption)}" loading="lazy"></button>
          <figcaption>${fmt(f.caption)}${f.q ? ` <button class="linklike" data-try="${f.q}">Try question ${f.q} →</button>` : ''}</figcaption></figure>`).join('')}</div></section>` : ''}
        <section class="module-cta card">
          ${ids.length ? `<div><h2>Practise this topic</h2><p class="muted">${plural(ids.length, 'question')} · ${mm.correct} answered correctly so far</p>${bar(mm.correct, mm.total, 'good')}</div>
            <div class="row"><button class="btn" id="practise">Practise ${ids.length} questions</button>` : `<div><h2>Ready to practise?</h2><p class="muted">Pick a topic module next, or go straight to a mock exam.</p></div><div class="row"><a class="btn" href="#/exam">Set up an exam</a>`}
            <button class="btn secondary" id="mark-read">${state.read[m.id] ? '✓ Marked as read' : 'Mark as read'}</button>
            <a class="btn ghost" href="https://learn.microsoft.com/search/?terms=${encodeURIComponent(m.search)}" target="_blank" rel="noopener">Microsoft Learn ↗</a>
          </div>
        </section>
        <nav class="pager">
          ${prev ? `<a href="#/guide/${prev.id}"><small>Previous</small>${esc(prev.title)}</a>` : '<span></span>'}
          ${next ? `<a class="next" href="#/guide/${next.id}"><small>Next</small>${esc(next.title)}</a>` : '<span></span>'}
        </nav>
      </article>`;
    if ($('#practise')) $('#practise').onclick = () => practiseModule(m.id);
    $('#mark-read').onclick = () => {
      state.read[m.id] ? delete state.read[m.id] : (state.read[m.id] = true);
      save(); $('#mark-read').textContent = state.read[m.id] ? '✓ Marked as read' : 'Mark as read';
    };
    $$('[data-try]').forEach(b => b.onclick = () => newSession('learn', [Number(b.dataset.try)], { label: 'Question ' + b.dataset.try }));
    bindZoom();
  }

  // ---------- question view ----------
  const answeredCount = s => s.ids.filter(id => G.isAnswered(byId.get(id), s.answers[id])).length;

  function instruction(q) {
    const k = G.kind(q);
    if (k === 'fields') return q.answerFields.every(f => f.choices.join() === 'Yes,No') ? 'Select Yes or No for each statement.' : 'Select one option for each item.';
    if (k === 'pairs') return 'Drag each value to its target, or tap a value and then a target. Not every value is used. Tap a filled target to clear it.';
    if (k === 'options') return q.correctAnswer.length > 1 ? `Select ${q.correctAnswer.length} answers.` : 'Select one answer.';
    return 'Type your answer.';
  }

  function figures(srcs, label) {
    if (!srcs || !srcs.length) return '';
    return `<div class="exhibits">${srcs.map((src, i) => `<figure><button class="zoom" data-zoom="${esc(src)}" aria-label="Enlarge ${label.toLowerCase()} ${i + 1}"><img src="${esc(src)}" alt="${esc(label)} ${i + 1}" loading="lazy"></button><figcaption>${esc(label)}${srcs.length > 1 ? ' ' + (i + 1) : ''}</figcaption></figure>`).join('')}</div>`;
  }

  function answerInput(q, s, answer, locked) {
    const k = G.kind(q), dis = locked ? 'disabled' : '';
    if (k === 'options') {
      const multi = q.type === 'multiple' || q.correctAnswer.length > 1;
      const chosen = new Set(Array.isArray(answer) ? answer : []);
      const correct = new Set(q.correctAnswer);
      const order = s.order[q.id] || q.options.map(o => o.id);
      return `<div class="options">${order.map(id => {
        const o = q.options.find(x => x.id === id);
        let cls = '', mark = '';
        if (locked) {
          if (correct.has(id)) { cls = chosen.has(id) ? 'is-correct' : 'is-missed'; mark = '<span class="mark">✓</span>'; }
          else if (chosen.has(id)) { cls = 'is-wrong'; mark = '<span class="mark">✗</span>'; }
        }
        return `<label class="option ${cls}"><input type="${multi ? 'checkbox' : 'radio'}" name="opt" value="${esc(id)}" ${chosen.has(id) ? 'checked' : ''} ${dis}><span class="key">${esc(id)}</span><span class="otext">${esc(o.text)}</span>${mark}</label>`;
      }).join('')}</div>`;
    }
    if (k === 'fields') {
      const vals = Array.isArray(answer) ? answer : [];
      const parts = locked ? G.partResults(q, answer) : [];
      const yn = q.answerFields.every(f => f.choices.join() === 'Yes,No');
      return `<div class="fields ${yn ? 'yn' : ''}">${q.answerFields.map((f, i) => `
        <fieldset class="field ${locked ? (parts[i] ? 'is-correct' : 'is-wrong') : ''}">
          <legend>${esc(f.label)}</legend>
          <div class="choices">${f.choices.map(c => `<label class="choice ${locked && c === f.answer ? 'answer' : ''}"><input type="radio" name="f${i}" value="${esc(c)}" ${vals[i] === c ? 'checked' : ''} ${dis}><span>${esc(c)}</span></label>`).join('')}</div>
          ${locked && !parts[i] ? `<p class="fix">Correct: <strong>${esc(f.answer)}</strong></p>` : ''}
        </fieldset>`).join('')}</div>`;
    }
    if (k === 'pairs') {
      const vals = Array.isArray(answer) ? answer : [];
      if (!s.chips[q.id]) { s.chips[q.id] = shuffle(q.dragCandidates && q.dragCandidates.length ? q.dragCandidates : q.matchingPairs.map(p => p.value)); save(); }
      const parts = locked ? G.partResults(q, answer) : [];
      return `<div class="dnd">
        <div class="chip-bank" aria-label="Values">${s.chips[q.id].map(v => `<button type="button" class="chip-drag" draggable="${!locked}" data-value="${esc(v)}" ${dis}>${esc(v)}</button>`).join('')}</div>
        <div class="targets">${q.matchingPairs.map((p, i) => `
          <div class="target ${locked ? (parts[i] ? 'is-correct' : 'is-wrong') : ''}">
            <span class="target-label">${esc(p.target)}</span>
            <button type="button" class="zone ${vals[i] ? 'filled' : ''}" data-i="${i}" data-value="${esc(vals[i] || '')}" ${dis}>${vals[i] ? esc(vals[i]) : 'Drop a value here'}</button>
            ${locked && !parts[i] ? `<p class="fix">Correct: <strong>${esc(p.value)}</strong></p>` : ''}
          </div>`).join('')}</div>
      </div>`;
    }
    return `<textarea id="freeAnswer" rows="4" placeholder="Enter your answer" ${dis}>${esc(answer || '')}</textarea>`;
  }

  function readAnswer(q) {
    const k = G.kind(q);
    if (k === 'options') return $$('[name=opt]:checked', app).map(x => x.value);
    if (k === 'fields') return q.answerFields.map((_, i) => ($(`[name=f${i}]:checked`, app) || {}).value || '');
    if (k === 'pairs') return $$('.zone', app).map(z => z.dataset.value || '');
    return ($('#freeAnswer') || {}).value?.trim() || '';
  }

  function answerLines(q) {
    const k = G.kind(q);
    if (k === 'fields') return q.answerFields.map(f => `${f.label.replace(/[:=]\s*$/, '')} → ${f.answer}`);
    if (k === 'pairs') return q.matchingPairs.map(p => `${p.target} → ${p.value}`);
    if (k === 'options') return q.correctAnswer.map(id => { const o = q.options.find(x => x.id === id); return o ? `${id}. ${o.text}` : id; });
    return [q.sourceAnswer.split('\n')[0]];
  }

  function explanationHtml(q) {
    let text = reflow((q.explanation || q.sourceAnswer).split(/\n?Incorrect Answers?:/i)[0]);
    text = text.replace(/^\s*Correct Answers?:\s*\n?/i, '');
    let html = esc(text);
    for (const line of answerLines(q)) {
      const e = esc(line), i = html.indexOf(e);
      if (i > -1) html = html.slice(0, i) + '<strong>' + e + '</strong>' + html.slice(i + e.length);
    }
    return html;
  }

  function feedback(q, answer) {
    const ok = G.isCorrect(q, answer), answered = G.isAnswered(q, answer);
    const mod = moduleById.get(q.module);
    const wrongs = Object.entries(q.incorrectExplanations || {});
    const hint = HINTS[q.id];
    return `
      <div class="feedback ${ok ? 'ok' : 'bad'}" role="status">
        <div class="fb-title">${ok ? '✓ Correct' : answered ? '✗ Not quite' : '– Not answered'}</div>
        ${ok || G.kind(q) !== 'options' ? (ok ? '' : '<div class="fb-answer"><span>Corrections are marked on each item above</span></div>') : `<div class="fb-answer"><span>Correct answer</span><ul>${answerLines(q).map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>`}
      </div>
      ${hint ? `<div class="nugget"><span class="nugget-icon" aria-hidden="true">💡</span><div><b>Key clue</b>${esc(hint)}</div></div>` : ''}
      ${figures(q.answerImages, 'Answer exhibit')}
      <details class="explain" open><summary>Explanation</summary><div class="prose">${explanationHtml(q)}</div></details>
      ${wrongs.length ? `<details class="explain"><summary>Why the other options are wrong</summary><div class="prose">${wrongs.map(([k, v]) => `<p><strong>${esc(k)}.</strong> ${esc(reflow(v))}</p>`).join('')}</div></details>` : ''}
      ${mod ? `<a class="study-link" href="#/guide/${mod.id}"><span class="badge sm">${esc(mod.badge)}</span><span><small>Study this topic</small>${esc(mod.title)}</span><span aria-hidden="true">→</span></a>` : ''}`;
  }

  function navigator(mode, s) {
    const items = s.ids.map((id, i) => {
      const q = byId.get(id), cls = [];
      if (i === s.index) cls.push('current');
      if (mode === 'learn' && s.checked[id] !== undefined) cls.push(s.checked[id] ? 'ok' : 'bad');
      else if (mode === 'review') cls.push(G.isCorrect(q, s.answers[id]) ? 'ok' : 'bad');
      else if (G.isAnswered(q, s.answers[id])) cls.push('answered');
      if (state.flagged[id]) cls.push('flagged');
      return `<button data-jump="${i}" class="${cls.join(' ')}" aria-label="Question ${i + 1}${state.flagged[id] ? ', flagged' : ''}">${i + 1}</button>`;
    }).join('');
    const legend = mode === 'exam'
      ? '<span><i class="lg answered"></i>Answered</span><span><i class="lg flagged"></i>Flagged</span>'
      : '<span><i class="lg ok"></i>Correct</span><span><i class="lg bad"></i>Incorrect</span><span><i class="lg flagged"></i>Flagged</span>';
    return `<details class="qmap" ${window.matchMedia('(min-width: 980px)').matches ? 'open' : ''}><summary>Question map</summary><div class="qmap-grid">${items}</div><div class="qmap-legend">${legend}</div></details>`;
  }

  function renderQuestion(mode) {
    const s = state[mode];
    s.index = Math.min(Math.max(0, s.index), s.ids.length - 1);
    const q = byId.get(s.ids[s.index]);
    const answer = s.answers[q.id];
    const locked = mode === 'review' || (mode === 'learn' && s.checked[q.id] !== undefined);
    const last = s.index === s.ids.length - 1;
    const nextLabel = mode === 'exam' ? (last ? 'Finish exam' : 'Next →')
      : mode === 'review' ? (last ? 'Back to results' : 'Next →')
      : last ? 'Finish session' : locked ? 'Next →' : 'Skip →';
    const showHintButton = mode === 'learn' && !locked && !!HINTS[q.id];

    app.innerHTML = `
      <div class="q-layout">
        <section class="qcard" aria-labelledby="qtitle">
          <div class="qmeta">
            <h1 class="qnum" id="qtitle">Question ${s.index + 1} <span>of ${s.ids.length}</span></h1>
            <span class="chip">${esc(q.topic)}</span>
            <span class="chip quiet">Bank #${q.id}</span>
            <button class="flag ${state.flagged[q.id] ? 'on' : ''}" id="flag" aria-pressed="${!!state.flagged[q.id]}">⚑ ${state.flagged[q.id] ? 'Flagged' : 'Flag'}</button>
          </div>
          <div class="qtext">${esc(reflow(q.question))}</div>
          ${q.caseStudy ? `<details class="case"><summary>Case study: Contoso background and requirements</summary><div class="qtext small">${esc(reflow(q.caseStudy))}</div></details>` : ''}
          ${figures(q.sourceImages, 'Exhibit')}
          <p class="instruction">${instruction(q)}</p>
          <div id="answer">${answerInput(q, s, answer, locked)}</div>
          <p class="hint" id="hint" hidden></p>
          ${showHintButton ? `<div class="nugget clue" id="hintbox" ${s.hints && s.hints[q.id] ? '' : 'hidden'}><span class="nugget-icon" aria-hidden="true">💡</span><div><b>Hint</b>${esc(HINTS[q.id])}</div></div>` : ''}
          ${locked ? feedback(q, answer) : ''}
          <div class="qactions">
            <button class="btn secondary" id="prev" ${s.index ? '' : 'disabled'}>← Previous</button>
            <span class="spacer"></span>
            ${showHintButton ? `<button class="btn ghost" id="hint-btn" aria-expanded="${!!(s.hints && s.hints[q.id])}" aria-controls="hintbox">💡 ${s.hints && s.hints[q.id] ? 'Hide hint' : 'Hint'}</button>` : ''}
            ${mode === 'learn' && !locked ? '<button class="btn" id="check">Check answer</button>' : ''}
            <button class="btn ${mode === 'learn' && !locked ? 'secondary' : ''}" id="next">${nextLabel}</button>
          </div>
        </section>
        ${navigator(mode, s)}
      </div>`;

    const persist = () => { s.answers[q.id] = readAnswer(q); save(); updateLive(mode); };
    $('#answer').addEventListener('change', persist);
    $('#answer').addEventListener('input', persist);
    if (!locked) bindDrag(persist);
    bindZoom();

    $('#flag').onclick = () => {
      state.flagged[q.id] ? delete state.flagged[q.id] : (state.flagged[q.id] = true);
      save(); const on = !!state.flagged[q.id];
      $('#flag').classList.toggle('on', on); $('#flag').setAttribute('aria-pressed', on); $('#flag').textContent = '⚑ ' + (on ? 'Flagged' : 'Flag');
      updateLive(mode);
    };
    if ($('#hint-btn')) $('#hint-btn').onclick = () => {
      s.hints = s.hints || {};
      s.hints[q.id] ? delete s.hints[q.id] : (s.hints[q.id] = true);
      save();
      const open = !!s.hints[q.id];
      $('#hintbox').hidden = !open;
      $('#hint-btn').textContent = '💡 ' + (open ? 'Hide hint' : 'Hint');
      $('#hint-btn').setAttribute('aria-expanded', open);
      renderScorebar(mode);
    };
    if ($('#check')) $('#check').onclick = () => {
      const a = readAnswer(q);
      if (!G.isAnswered(q, a)) { const h = $('#hint'); h.hidden = false; h.textContent = 'Choose an answer first, or press Skip.'; return; }
      const ok = G.isCorrect(q, a);
      s.answers[q.id] = a; s.checked[q.id] = ok; s.log.push(ok); state.completed[q.id] = ok;
      save(); renderQuestion(mode);
      const fb = $('.feedback'); if (fb) fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
    $('#prev').onclick = () => move(mode, -1);
    $('#next').onclick = () => move(mode, 1);
    $$('[data-jump]').forEach(b => b.onclick = () => { s.index = Number(b.dataset.jump); save(); renderQuestion(mode); window.scrollTo(0, 0); });

    renderScorebar(mode);
  }

  function move(mode, d) {
    const s = state[mode];
    if (d > 0 && s.index === s.ids.length - 1) {
      if (mode === 'exam') return finishExam(false);
      if (mode === 'review') return go('#/results');
      s.done = true; save(); return go('#/learn/summary');
    }
    s.index += d; save(); renderQuestion(mode); window.scrollTo(0, 0);
  }

  function bindDrag(persist) {
    let selected = '';
    const chips = $$('.chip-drag', app);
    const put = (zone, v) => {
      zone.dataset.value = v; zone.textContent = v || 'Drop a value here'; zone.classList.toggle('filled', !!v);
      selected = ''; chips.forEach(c => c.classList.remove('selected')); persist();
    };
    chips.forEach(chip => {
      chip.ondragstart = e => e.dataTransfer.setData('text/plain', chip.dataset.value);
      chip.onclick = () => { selected = selected === chip.dataset.value ? '' : chip.dataset.value; chips.forEach(c => c.classList.toggle('selected', c === chip && !!selected)); };
    });
    $$('.zone', app).forEach(zone => {
      zone.ondragover = e => { e.preventDefault(); zone.classList.add('over'); };
      zone.ondragleave = () => zone.classList.remove('over');
      zone.ondrop = e => { e.preventDefault(); zone.classList.remove('over'); put(zone, e.dataTransfer.getData('text/plain')); };
      zone.onclick = () => { if (selected) put(zone, selected); else if (zone.dataset.value) put(zone, ''); };
    });
  }

  function bindZoom() {
    const dlg = $('#lightbox');
    $$('[data-zoom]').forEach(b => b.onclick = () => {
      $('img', dlg).src = b.dataset.zoom; $('img', dlg).alt = b.querySelector('img')?.alt || '';
      if (dlg.showModal) dlg.showModal(); else window.open(b.dataset.zoom, '_blank');
    });
  }

  // ---------- score bar ----------
  function learnStats(s) {
    const vals = Object.values(s.checked);
    const correct = vals.filter(Boolean).length, wrong = vals.length - correct;
    let streak = 0; for (let i = s.log.length - 1; i >= 0 && s.log[i]; i--) streak++;
    let best = 0, run = 0; s.log.forEach(ok => { run = ok ? run + 1 : 0; best = Math.max(best, run); });
    return { correct, wrong, checked: vals.length, streak, best };
  }
  function examStats(s) {
    let correct = 0, answered = 0;
    s.ids.forEach(id => { const q = byId.get(id), a = s.answers[id]; if (G.isAnswered(q, a)) { answered++; if (G.isCorrect(q, a)) correct++; } });
    return { correct, answered, flagged: s.ids.filter(id => state.flagged[id]).length };
  }

  function renderScorebar(mode) {
    const s = state[mode];
    scorebar.hidden = false;
    let html = '';
    if (mode === 'learn') {
      const t = learnStats(s), total = s.ids.length;
      html = `
        <div class="sb-mode"><b>Learning</b><span>${esc(s.label)}</span></div>
        <div class="sb-stat good"><b>${t.correct}</b><span>Correct</span></div>
        <div class="sb-stat bad"><b>${t.wrong}</b><span>Incorrect</span></div>
        <div class="sb-stat"><b>${t.checked ? pct(t.correct, t.checked) + '%' : '–'}</b><span>Accuracy</span></div>
        <div class="sb-stat"><b>${t.streak}${t.streak >= 3 ? ' 🔥' : ''}</b><span>Streak</span></div>
        <div class="sb-progress"><span>${t.checked} of ${total} checked</span><div class="split"><i class="g" style="width:${pct(t.correct, total)}%"></i><i class="r" style="width:${pct(t.wrong, total)}%"></i></div></div>
        <button class="btn small ghost" id="sb-exit">Exit</button>`;
    } else if (mode === 'exam') {
      const t = examStats(s), total = s.ids.length;
      html = `
        <div class="sb-mode"><b>Exam</b><span>${esc(s.label)}</span></div>
        <div class="sb-stat"><b>${t.answered}<small>/${total}</small></b><span>Answered</span></div>
        <div class="sb-stat"><b>${t.flagged}</b><span>Flagged</span></div>
        <div class="sb-stat ${s.limitMin ? 'timer' : ''}"><b id="sb-timer">${timerText(s)}</b><span>${s.limitMin ? 'Remaining' : 'Elapsed'}</span></div>
        <div class="sb-stat score"><b>${state.prefs.liveScore ? `${t.correct}<small>/${t.answered}</small>` : '•••'}</b><span><button class="linklike" id="sb-live">${state.prefs.liveScore ? 'Hide score' : 'Show score'}</button></span></div>
        <div class="sb-progress"><span>${pct(t.answered, total)}% complete</span><div class="split"><i class="b" style="width:${pct(t.answered, total)}%"></i></div></div>
        <button class="btn small" id="sb-finish">Finish</button>`;
    } else {
      const wrongIdx = s.index + 1;
      html = `
        <div class="sb-mode"><b>Review</b><span>Missed exam questions</span></div>
        <div class="sb-stat"><b>${wrongIdx}<small>/${s.ids.length}</small></b><span>Reviewing</span></div>
        <span class="spacer"></span>
        <a class="btn small ghost" href="#/results">Back to results</a>`;
    }
    scorebar.innerHTML = `<div class="sb-inner">${html}</div>`;
    if ($('#sb-exit')) $('#sb-exit').onclick = () => go('#/');
    if ($('#sb-finish')) $('#sb-finish').onclick = () => finishExam(false);
    if ($('#sb-live')) $('#sb-live').onclick = () => { state.prefs.liveScore = !state.prefs.liveScore; save(); renderScorebar(mode); };
    if (mode === 'exam' && !timer) timer = setInterval(tick, 1000);
  }

  function timerText(s) {
    const elapsed = Date.now() - s.startedAt;
    return s.limitMin ? clock(s.limitMin * 60000 - elapsed) : clock(elapsed);
  }
  function tick() {
    const s = state.exam;
    if (!s || s.results) return clearInterval(timer);
    const el = $('#sb-timer'); if (el) el.textContent = timerText(s);
    if (s.limitMin) {
      const left = s.limitMin * 60000 - (Date.now() - s.startedAt);
      if (el) el.parentElement.classList.toggle('low', left < 5 * 60000);
      if (left <= 0) { toast('Time is up. Your exam has been submitted.'); finishExam(true); }
    }
  }

  function updateLive(mode) {
    // Refresh the score bar and question map after an answer changes, without re-rendering the question.
    renderScorebar(mode);
    const s = state[mode], map = $('.qmap');
    if (map) { const open = map.open; map.outerHTML = navigator(mode, s); $('.qmap').open = open; $$('[data-jump]').forEach(b => b.onclick = () => { s.index = Number(b.dataset.jump); save(); renderQuestion(mode); window.scrollTo(0, 0); }); }
  }

  // ---------- results ----------
  function topicBreakdown(items) {
    const topics = {};
    items.forEach(x => { const q = byId.get(x.id); const t = topics[q.module] ??= { c: 0, n: 0 }; t.n++; if (x.ok) t.c++; });
    return Object.entries(topics).sort((a, b) => pct(a[1].c, a[1].n) - pct(b[1].c, b[1].n));
  }
  function breakdownHtml(items) {
    return `<div class="breakdown">${topicBreakdown(items).map(([id, v]) => {
      const m = moduleById.get(id);
      return `<div class="mastery-row"><a class="mastery-name" href="#/guide/${id}"><span class="badge sm">${esc(m.badge)}</span>${esc(m.title)}</a>${bar(v.c, v.n, pct(v.c, v.n) >= TARGET ? 'good' : 'bad')}<span class="nowrap"><b>${pct(v.c, v.n)}%</b> <span class="muted">${v.c}/${v.n}</span></span></div>`;
    }).join('')}</div>`;
  }

  function finishExam(auto) {
    const s = state.exam;
    if (!s || s.results) return;
    if (!auto) {
      const un = s.ids.length - answeredCount(s);
      if (!confirm(un ? `You have ${plural(un, 'unanswered question')}. Finish the exam anyway?` : 'Finish the exam and see your score?')) return;
    }
    clearInterval(timer); timer = null;
    const items = s.ids.map(id => { const q = byId.get(id), a = s.answers[id]; return { id, ok: G.isCorrect(q, a), answered: G.isAnswered(q, a) }; });
    items.forEach(x => { state.completed[x.id] = x.ok; });
    const correct = items.filter(x => x.ok).length, score = pct(correct, items.length);
    const elapsed = Math.min(Date.now() - s.startedAt, s.limitMin ? s.limitMin * 60000 : Infinity);
    s.results = { correct, total: items.length, score, unanswered: items.filter(x => !x.answered).length, elapsed, items };
    state.bestScore = Math.max(state.bestScore || 0, score);
    state.history.push({ date: new Date().toISOString(), score, correct, total: items.length, unanswered: s.results.unanswered, label: s.label });
    state.history = state.history.slice(-50);
    save();
    go('#/results');
  }

  function results() {
    const s = state.exam, r = s.results;
    const missed = r.items.filter(x => !x.ok).map(x => x.id);
    const pass = r.score >= TARGET;
    app.innerHTML = `
      <nav class="crumbs"><a href="#/">Home</a><span>/</span>Exam results</nav>
      <section class="card results">
        <div class="ring ${pass ? 'good' : 'bad'}" style="--p:${r.score}"><div><b>${r.score}%</b><span>${r.correct}/${r.total}</span></div></div>
        <div class="results-copy">
          <span class="score-pill ${pass ? 'good' : 'bad'}">${pass ? 'Above' : 'Below'} the ${TARGET}% practice target</span>
          <h1>${pass ? 'Nice work.' : 'Keep going. You\'re building it.'}</h1>
          <p>${r.correct} correct · ${r.total - r.correct - r.unanswered} incorrect · ${r.unanswered} unanswered · ${clock(r.elapsed)} taken</p>
          <p class="muted">${esc(s.label)}. Microsoft reports a scaled score where 700 passes, so aim comfortably above ${TARGET}% here.</p>
          <div class="row">
            ${missed.length ? '<button class="btn" id="review">Review missed answers</button><button class="btn secondary" id="relearn">Practise missed in Learning mode</button>' : ''}
            <a class="btn ${missed.length ? 'ghost' : ''}" href="#/exam">New exam</a>
          </div>
        </div>
      </section>
      <section class="card"><h2>By topic</h2><p class="muted">Weakest first. Select a topic to open its study module.</p>${breakdownHtml(r.items)}</section>
      ${missed.length ? `<section class="card"><h2>Missed questions</h2><div class="qmap-grid inline">${r.items.map((x, i) => x.ok ? '' : `<button data-review="${missed.indexOf(x.id)}" class="bad">${i + 1}</button>`).join('')}</div></section>` : ''}`;

    const openReview = i => { state.review = { mode: 'review', ids: missed, index: i, answers: s.answers, order: s.order, chips: s.chips, checked: {}, log: [] }; save(); go('#/review'); };
    if ($('#review')) $('#review').onclick = () => openReview(0);
    if ($('#relearn')) $('#relearn').onclick = () => newSession('learn', missed, { label: 'Missed exam questions' });
    $$('[data-review]').forEach(b => b.onclick = () => openReview(Number(b.dataset.review)));
  }

  function learnSummary() {
    const s = state.learn, t = learnStats(s);
    const items = s.ids.filter(id => s.checked[id] !== undefined).map(id => ({ id, ok: s.checked[id] }));
    const wrong = items.filter(x => !x.ok).map(x => x.id);
    const skipped = s.ids.length - items.length;
    app.innerHTML = `
      <nav class="crumbs"><a href="#/">Home</a><span>/</span>Session summary</nav>
      <section class="card results">
        <div class="ring ${pct(t.correct, t.checked) >= TARGET ? 'good' : 'bad'}" style="--p:${pct(t.correct, t.checked)}"><div><b>${t.checked ? pct(t.correct, t.checked) + '%' : '–'}</b><span>${t.correct}/${t.checked}</span></div></div>
        <div class="results-copy">
          <span class="score-pill">Learning session · ${esc(s.label)}</span>
          <h1>Session complete</h1>
          <p>${t.correct} correct · ${t.wrong} incorrect · ${skipped} skipped · best streak ${t.best}</p>
          <div class="row">
            ${wrong.length ? '<button class="btn" id="retry">Retry the ones I missed</button>' : ''}
            <button class="btn secondary" id="again">Go through it again</button>
            <a class="btn ghost" href="#/">Home</a>
          </div>
        </div>
      </section>
      ${items.length ? `<section class="card"><h2>By topic</h2>${breakdownHtml(items)}</section>` : ''}`;
    if ($('#retry')) $('#retry').onclick = () => newSession('learn', wrong, { label: 'Retry missed' });
    $('#again').onclick = () => newSession('learn', s.random ? shuffle(s.ids) : s.ids, { label: s.label, random: s.random });
  }

  // ---------- keyboard ----------
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || $('#lightbox').open) return;
    const view = document.body.dataset.view;
    if (!['learn', 'exam', 'review'].includes(view) || !$('#next')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); $('#next').click(); }
    else if (e.key === 'ArrowLeft' && !$('#prev').disabled) { e.preventDefault(); $('#prev').click(); }
  });
  $('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') e.target.close(); });

  window.addEventListener('hashchange', route);
  route();
})();
