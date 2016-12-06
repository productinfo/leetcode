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

// O(m + n)

/**
  3/21/2016
 */
var strStr = function(s1, s2) {

  var l1 = s1.length, l2 = s2.length;

  if (l2 > l1) {
    return -1;
  }

  if (l2 === l1) {
    return s1 === s2 ? 0 : -1;
  }

  var i = 0, j;

  for (; i < l1 - l2 + 1; i++) {

    j = 0;
    while (j < l2 && s1[i + j] === s2[j]) {
      j++;
    }

    if (j === l2) {
      return i;
    }
  }

  return -1;
};

// 4/24/2016
var strStr = function(s1, s2) {
  let sl1 = s1.length, sl2 = s2.length;
  if (sl2 > sl1) return -1;
  if (sl1 === sl2) return s1 === s2 ? 0 : -1;
  for (let i = 0; i <= sl1 - sl2; i++) {
    const sub = s1.substring(i, i + sl2);
    if (sub === s2) return i;
  }
  return -1;
};

// 9/17/2016
var strStr = function(haystack, needle) {
  const l1 = haystack.length;
  const l2 = needle.length;
  if (l2 > l1) return -1;
  if (haystack === needle) return 0;

  for (let i = 0; i <= l1 - l2; i++) {
    if (haystack.substring(i, i + l2) === needle) {
      return i;
    }
  }

  return -1;
};
