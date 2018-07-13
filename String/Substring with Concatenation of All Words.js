// 3/10/2018
var findSubstring = function(s, words) {
  const res = [];
  if (!s || !s.length) return res;
  const totalWords = words.length;
  const lenOfWord = words[0].length;
  const map = {};
  for (const word of words) {
    map[word] = map[word] || 0;
    map[word]++;
  }
  for (let i = 0; i <= (s.length - totalWords * lenOfWord); i++) {
    let k = totalWords;
    let j = i;
    const copy = Object.assign({}, map);
    while (k) {
      const subs = s.substring(j, j + lenOfWord);
      if (!(subs in copy) || copy[subs] === 0) break;
      copy[subs]--;
      k--;
      j += lenOfWord;
    }
    if (k === 0) res.push(i);
  }
  return res;
};
