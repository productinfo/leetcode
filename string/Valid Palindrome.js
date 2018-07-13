/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(x) {

  var p1 = 0, p2 = x.length - 1, s = x.toLowerCase();

  while (p1 < p2) {

    if (!is(s[p1])) {
      p1 += 1;
    } else if (!is(s[p2])) {
      p2 -= 1;
    } else if (s[p1] === s[p2]) {
      p1 += 1;
      p2 -= 1;
    } else {
      return false;
    }

  }

  return true;

};

function is (ch) {

  if (ch >= 'a' && ch <= 'z') {
    return true;
  }
  if (ch >= '0' && ch <= '9') {
    return true;
  }

  return false;

}

// 4/4/2016
const check = (c) => {

  if ('0' <= c && c <= '9') {
    return true;
  }

  if ('a' <= c && c <= 'z') {
    return true;
  }

  return false;
};

const isPalindrome = (s) => {

  const len = s.length;

  if (!len) return true;

  s = s.toLowerCase().trim();

  let p1 = 0, p2 = len - 1;

  while (p1 < p2) {

    if (!check(s[p1])) {
      p1++;
    } else if (!check(s[p2])) {
      p2--;
    } else if (s[p1] === s[p2]) {
      p1++;
      p2--;
    } else {
      return false;
    }

  }

  return true;

};

// 5/17/2018
const v = ch => {
  if (
    (ch >= 'a' && ch <= 'z') ||
      (ch >= 'A' && ch <= 'Z')
  ) return true;
  if (ch >= '0' && ch <= '9') return true;
  return false;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s || !s.length) return true;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !v(s[i])) i++;
    while (i < j && !v(s[j])) j--;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
};

