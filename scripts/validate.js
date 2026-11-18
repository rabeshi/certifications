const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

const box = { window: {} };
vm.createContext(box);
for (const file of ['data/questions.js', 'data/tutorial.js', 'data/hints.js', 'data/examples.js', 'js/grading.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), box, { filename: file });
const bank = box.window.AI103_QUESTIONS;
const guide = box.window.AI103_TUTORIAL;
const G = box.window.AI103_GRADING;
const modules = new Set(guide.map(m => m.id));

assert.equal(bank.length, 175);
assert.equal(new Set(bank.map(q => q.id)).size, 175);
for (const [index, q] of bank.entries()) {
  assert.equal(q.id, index + 1, 'Question numbering gap');
  assert.ok(q.question && q.sourceAnswer && q.explanation, `Q${q.id} missing content`);
  assert.ok(!/^\s*s\.\s/.test(q.sourceAnswer), `Q${q.id} stem was split inside a word`);
  assert.ok(modules.has(q.module) && q.module !== 'overview', `Q${q.id} has no study-guide module`);
  assert.notEqual(G.kind(q), 'text', `Q${q.id} has no interactive answer input`);
  assert.equal(q.needsReview, false, `Q${q.id} still needs manual review`);
  assert.equal(new Set(q.options.map(o => o.id)).size, q.options.length, `Q${q.id} repeated option IDs`);
  if (q.options.length) assert.ok(q.correctAnswer.length, `Q${q.id} missing correct choices`);
  for (const id of q.correctAnswer) assert.ok(q.options.some(o => o.id === id), `Q${q.id} invalid answer`);
  for (const field of q.answerFields) {
    assert.ok(field.label && field.choices.length >= 2 && field.choices.includes(field.answer), `Q${q.id} invalid image choices`);
    assert.equal(new Set(field.choices).size, field.choices.length, `Q${q.id} duplicate choices`);
  }
  if (G.kind(q) === 'pairs' && q.dragCandidates.length) {
    const pool = q.dragCandidates.map(G.clean);
    for (const p of q.matchingPairs) assert.ok(pool.includes(G.clean(p.value)), `Q${q.id} answer "${p.value}" is not a draggable value`);
  }
  for (const path of [...q.sourceImages, ...q.answerImages]) {
    assert.ok(fs.existsSync(path), `Missing ${path}`);
    assert.ok(path.startsWith(`assets/questions/q${q.id}-`), `Misassigned ${path}`);
  }
  assert.ok(q.sourceImages.every(path => !q.answerImages.includes(path)), `Q${q.id} reveals answer image`);
  assert.equal(Boolean(q.caseStudy), q.id >= 166, `Q${q.id} case study association`);
  if (q.id < 166) assert.ok(!q.explanation.includes('Case Study'), `Q${q.id} swallowed case study`);
  // Every question must be answerable: feeding the expected answer back must grade as correct.
  const expected = G.kind(q) === 'fields' ? q.answerFields.map(f => f.answer)
    : G.kind(q) === 'pairs' ? q.matchingPairs.map(p => p.value) : q.correctAnswer;
  assert.equal(G.isCorrect(q, expected), true, `Q${q.id} cannot be answered correctly`);
  assert.equal(G.isCorrect(q, []), false, `Q${q.id} blank answer graded correct`);
}
for (const id of [3, 148, 151, 152, 154, 158, 160, 163, 164, 166, 173, 175]) {
  assert.ok(bank[id - 1].answerFields.length, `Q${id} missing interactive image choices`);
  assert.ok(bank[id - 1].sourceImages.length && bank[id - 1].answerImages.length, `Q${id} missing exhibits`);
}
for (const id of [151, 154, 160]) assert.equal(bank[id - 1].sourceImages.length, 2, `Q${id} must show code and statements`);
for (const [id, answer] of [[80, 'C'], [108, 'C'], [155, 'C'], [157, 'A,C'], [165, 'C,E'], [171, 'A,C']]) {
  assert.equal(bank[id - 1].correctAnswer.join(','), answer, `Q${id} incorrect answer import`);
}
assert.ok(bank[126].answerImages.includes('assets/questions/q127-p132-b749788c.png'), 'Q127 completed answer area must stay hidden until reveal');

// Grading edge cases: blank, partial, reversed, quoted and correct answers.
const q3 = bank[2];
assert.equal(G.isCorrect(q3, []), false);
assert.equal(G.isCorrect(q3, ['Set action to block.', '']), false);
assert.equal(G.isCorrect(q3, ['Enable Spotlighting.', 'Set action to block.']), false);
assert.equal(G.isCorrect(q3, ['Set action to block.', 'Enable Spotlighting.']), true);
assert.equal(G.isCorrect(bank[164], ['E', 'C']), true);
assert.equal(G.isCorrect(bank[164], ['C']), false);
assert.equal(G.isCorrect(bank[15], ['"tool_choice"', '"required"']), true, 'Q16 quoted drag values');
assert.equal(G.isAnswered(q3, ['', '']), false);

// Every question has a hint that does not simply quote the answer letter.
const hints = box.window.AI103_HINTS;
for (const q of bank) {
  assert.ok(hints[q.id] && hints[q.id].length > 30, `Q${q.id} missing hint`);
  assert.ok(!/(?:answer|option) [A-H]/i.test(hints[q.id]), `Q${q.id} hint names an option letter`);
}

// Study guide integrity.
assert.equal(guide[0].id, 'overview');
for (const m of guide) {
  assert.ok(m.title && m.tagline && m.intro && m.services.length && m.points.length && m.tips.length, `Module ${m.id} incomplete`);
  for (const f of m.figures) assert.ok(fs.existsSync(f.src), `Module ${m.id} missing figure ${f.src}`);
  const ex = box.window.AI103_EXAMPLES[m.id];
  assert.ok(ex && ex.title && ex.setting && ex.rows.length >= 5 && ex.rows.every(r => r.length === 3 && r.every(Boolean)), `Module ${m.id} needs a real-world example`);
  if (m.id !== 'overview') assert.ok(bank.some(q => q.module === m.id), `Module ${m.id} has no practice questions`);
}

console.log(`PASS: ${bank.length} questions (${bank.filter(q => q.answerFields.length).length} answer-area, ${bank.filter(q => G.kind(q) === 'pairs').length} drag-drop, ${bank.filter(q => G.kind(q) === 'options').length} multiple-choice); every question answerable and hinted; ${guide.length} study-guide modules with real-world examples verified.`);
