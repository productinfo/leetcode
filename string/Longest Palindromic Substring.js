/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {

  const len = s.length;

  if (len === 0) {
    return 0;
  }

  let partial, longest = s[0];

  for (let i = 0 ; i < len ; i++) {

    partial = expand(s, i, i);
    if (partial.length > longest.length) {
      longest = partial;
    }

    partial = expand(s, i, i + 1);
    if (partial.length > longest.length) {
      longest = partial;
    }

  }

  return longest;

};

/**
 * expand from center
 */
const expand = (str, l, r) => {

  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
  }

  return str.substring(l + 1, r);
}

// 9/16/2016
var longestPalindrome = function(s) {

  const len = s.length;
  if (!len) return '';
  let longest = s[0];
  let part;
  for (let i = 0; i < len; i++) {
    part = go(s, i, i);
    if (part.length > longest.length) {
      longest = part;
    }
    part = go(s, i, i + 1);
    if (part.length > longest.length) {
      longest = part;
    }
  }
  return longest;
};

const go = (s, m, n) => {
  while (s[m] === s[n] && m >= 0 && n < s.length) {
    m--;
    n++:
  }
  return s.substring(m + 1, n);
}

// 4/16/2017
const longestPalindrome = s => {
  const len = s.length;
  if (!len) return '';
  const ext = (x, y) => {
    while (x >= 0 && y < len && s[x] === s[y]) {
      x -= 1;
      y += 1;
    }
    return s.substring(x + 1, y);
  };
  let longest = s[0];
  let part;
  for (let i = 0; i < len; i++) {
    part = ext(i, i);
    if (part.length > longest.length) longest = part;
    part = ext(i, i + 1);
    if (part.length > longest.length) longest = part;
  }
  return longest;
};
