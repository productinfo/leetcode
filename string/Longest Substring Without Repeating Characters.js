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

//////////////////////////////////////////////

var lengthOfLongestSubstring = function(s) {
  var map = {};
  var left = 0;
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    left = (map[s[i]] + 1) ? Math.max(left, map[s[i]] + 1) : left;
    map[s[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  return max;
};

// 9/16/2016
var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  const map = {};
  let left = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    left = (s[i] in map) ? Math.max(left, map[s[i]] + 1) : left;
    map[s[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  return max;
};
