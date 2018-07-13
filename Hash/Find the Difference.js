var findTheDifference = function(s, t) {
  const map = {};
  for (const ch of s) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  for (const ch of t) {
    if (ch in map) {
      map[ch]--;
    } else {
      return ch;
    }
  }
  return Object.keys(map).find(k => map[k] !== 0);
};
