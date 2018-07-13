var areSentencesSimilar = function (words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  const map = {};
  for (const p of pairs) {
    const [w1, w2] = p;
    map[w1] = map[w1] || [];
    map[w1].push(w2);
    map[w2] = map[w2] || [];
    map[w2].push(w1);
  }
  for (let i = 0; i < words1.length; i++) {
    if (words1[i] === words2[i]) continue;
    if (
      !(words1[i] in map) ||
      (words1[i] in map && !map[words1[i]].includes(words2[i]))
    ) return false;
  }
  return true;
};

// 4/27/2018
var areSentencesSimilar = function(words1, words2, pairs) {
  const l1 = words1.length;
  const l2 = words2.length;
  if (l1 !== l2) return false;
  let total = 0;
  for (let i = 0; i < l1; i++) {
    const w1 = words1[i];
    const w2 = words2[i];
    if (w1 === w2 || pairs.some(pair => {
      const i1 = pair.indexOf(w1);
      const i2 = pair.indexOf(w2);
      return i1 > -1 && i2 > -1;
    })) {
      total++;
    }
  }
  return total === l1;
};
