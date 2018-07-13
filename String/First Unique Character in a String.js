var firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] || { n: 0, i };
    map[s[i]].n++;
  }
  let min = Infinity;
  Object.keys(map).forEach(ch => {
    const obj = map[ch];
    if (obj.n === 1) {
      min = Math.min(min, obj.i);
    }
  });
  return min === Infinity ? -1 : min;
};

var firstUniqChar = function(s) {
  const map = {};
  const count = [];
  const BASE = 97;
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - BASE;
    count[k] = count[k] || 0;
    count[k]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - BASE] === 1) return i;
  }
  return -1;
};
