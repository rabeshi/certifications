// Answer grading shared by the app (browser) and scripts/validate.js (Node).
(function (root) {
  'use strict';

  // Compare drag/drop and drop-down values without caring about surrounding quotes or case.
  const clean = v => String(v ?? '').trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g, '').trim().toLowerCase();
  const norm = a => (Array.isArray(a) ? a : [a]).map(clean).filter(Boolean).sort();

  function kind(q) {
    if (q.answerFields && q.answerFields.length) return 'fields';
    if (q.type === 'drag-drop' && q.matchingPairs && q.matchingPairs.length) return 'pairs';
    if (q.options && q.options.length) return 'options';
    return 'text';
  }

  function isAnswered(q, a) {
    if (a == null) return false;
    const k = kind(q);
    if (k === 'fields' || k === 'pairs') return Array.isArray(a) && a.some(v => clean(v));
    return norm(a).length > 0;
  }

  function isCorrect(q, a) {
    const k = kind(q);
    if (k === 'fields') return Array.isArray(a) && q.answerFields.every((f, i) => clean(a[i]) === clean(f.answer));
    if (k === 'pairs') return Array.isArray(a) && q.matchingPairs.every((p, i) => clean(a[i]) === clean(p.value));
    const expected = k === 'options' ? q.correctAnswer : q.sourceAnswer;
    return JSON.stringify(norm(a)) === JSON.stringify(norm(expected));
  }

  // Per-part result, used to colour individual fields/targets after checking.
  function partResults(q, a) {
    const k = kind(q);
    if (k === 'fields') return q.answerFields.map((f, i) => clean(a && a[i]) === clean(f.answer));
    if (k === 'pairs') return q.matchingPairs.map((p, i) => clean(a && a[i]) === clean(p.value));
    return [];
  }

  root.AI103_GRADING = { clean, norm, kind, isAnswered, isCorrect, partResults };
})(typeof window !== 'undefined' ? window : globalThis);
