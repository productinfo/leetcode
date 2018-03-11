/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const list = [];
  if (s.length === 0 || p.length === 0) return list;
  const map = {};
  for (const ch of p) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  let left = 0;
  let right = 0;
  let count = p.length;
  while (right < s.length) {
    // move right everytime, if the character exists in p's hash, decrease the count
    // current hash value >= 1 means the character is existing in p
    const c1 = s[right];
    if (map[c1] >= 1) count--;
    map[c1]--;
    right++;
    // when the count is down to 0, means we found the right anagram
    // then add window's left to result list
    if (count === 0) list.push(left);
    // if we find the window's size equals to p, then we have to move left (narrow the window) to find the new match window
    // ++ to reset the hash because we kicked out the left
    // only increase the count if the character is in p
    // the count >= 0 indicate it was original in the hash, cuz it won't go below 0
    if (right - left === p.length) {
      const c2 = s[left];
      if (map[c2] >= 0) count++;
      map[c2]++;
      left++;
    }
  }
  return list;
};

// 8/30/2017
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const res = [];
  if (s.length === 0 || p.length === 0) return res;
  let count = p.length;
  const map = {};
  for (const ch of s) map[ch] = 0;
  for (const ch of p) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  let end = 0;
  let start = 0;
  const len = s.length;
  while (end < len) {
    const c1 = s[end];
    if (map[c1] > 0) count--;
    map[c1]--;
    end++;
    if (count === 0) res.push(start);
    if (end - start === p.length) {
      const c2 = s[start];
      map[c2]++;
      if (map[c2] > 0) count++;
      start++;
    }
  }
  return res;
};