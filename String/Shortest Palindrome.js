/*
  find `suffix`
  and `reverse suffix + shortestPalindrome(prefix) + suffux`
*/
var shortestPalindrome = function(s) {
  let j = 0;
  let i = s.length - 1;
  for (; i >= 0; i--) {
    if (s[i] === s[j]) j++;
  }
  if (j === s.length) return s;
  const suffix = s.substring(j);
  return `${suffix.split('').reverse().join('')}${shortestPalindrome(s.substring(0, j))}${suffix}`;
};