/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

  var n = needle.length;

  if (haystack === undefined || needle === undefined || n === 0) {
    return 0;
  }

  var m = haystack.length;

  if (n > m) {
    return -1;
  }

  var i = 0, j, matched;

  for (; i < m - n + 1 ; i++) {

    matched = true

    for (j = 0 ; j < n ; j++) {

      if (haystack[i + j] !== needle[j]) {
        matched = false;
        break;
      }

    }

    if (matched) {
      return i;
    }

  }

  return -1;
};