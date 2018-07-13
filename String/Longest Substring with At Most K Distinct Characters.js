var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = {};
  let p1 = 0;
  let max = 0;
  for (let p2 = 0; p2 < s.length; p2++) {
    const c2 = s[p2];
    map[c2] = map[c2] || 0;
    map[c2]++;
    while (Object.keys(map).length > k) {
      const c1 = s[p1++];
      if (c1 in map) {
        map[c1]--;
        if (map[c1] === 0) delete map[c1];
      }
    }
    max = Math.max(max, p2 - p1 + 1);
  }
  return max;
};

var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (!s || !s.length) return 0;
  const map = {};
  let p1 = 0;
  let max = 0;
  for (const ch of s) map[ch] = 0;
  const len = map => Object.keys(map).reduce((t, k) => {
    if (map[k] > 0) t++;
    return t;
  }, 0);
  for (let p2 = 0; p2 < s.length; p2++) {
    map[s[p2]]++;
    while (len(map) > k) {
      map[s[p1++]]--;
    }
    max = Math.max(max, p2 - p1 + 1);
  }
  return max;
};

// 4/26/2018
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (!s || !s.length) return 0;
  let res = 0;
  const map = {};
  let p1 = 0;
  for (let p2 = 0; p2 < s.length; p2++) {
    map[s[p2]] = map[s[p2]] || 0
    map[s[p2]]++;
    while (Object.keys(map).length > k) {
      map[s[p1]]--;
      if (map[s[p1]] === 0) delete map[s[p1]];
      p1++;
    }
    res = Math.max(res, p2 - p1 + 1);
  }
  return res;
};
