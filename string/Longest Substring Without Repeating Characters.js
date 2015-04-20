/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  var len = s.length;

  if (len === 0) {
    return len;
  }

  var i = 0, map = {}, index = 0, ans = 0;

  for (; i < len ; i++) {

    if (map.hasOwnProperty(s[i]) && index < map[s[i]] + 1) {
      index = map[s[i]] + 1;
    }
    ans = Math.max(ans, i - index + 1);
    map[s[i]] = i;
  }

  return ans;
};