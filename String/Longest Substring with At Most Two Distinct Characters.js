var lengthOfLongestSubstringTwoDistinct = function(s) {
  if (!s || !s.length) return 0;
  const map = {};
  // for (const ch of s) map[ch] = 0;
  let max = 0;
  let index = 0;
  for (let j = 0; j < s.length; j++) {
    map[s[j]] = map[s[j]] || 0;
    map[s[j]]++;
    while (Object.keys(map).length > 2) {
      map[s[index]]--;
      if (map[s[index]] === 0) delete map[s[index]];
      index++;
    }
    max = Math.max(max, j - index + 1);
  }
  return max;
};
