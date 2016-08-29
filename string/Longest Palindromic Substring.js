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
