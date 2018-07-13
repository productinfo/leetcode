/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {};
  let count = 0;
  for (const ch of s) {
    if (ch in map) {
      delete map[ch];
      count++;
    } else {
      map[ch] = true;
    }
  }
  count *= 2;
  return Object.keys(map).length ? count + 1 : count;
};