/**
 * Given two strings S and T, determine if they are both one edit distance apart.
 */

var isOneEditDistance = function (s, t) {

  if (!s || !t) return false;

  var m = s.length, n = t.length;

  if (Math.abs(m - n) > 1) return false;

  if (m > n) return isOneEditDistance(t, s);

  var i = 0, shift = n - m;

  while (i < m && s[i] === t[i]) i++;

  if (i === m) return shift === 1;

  if (shift === 0) i++;

  while (i < m && s[i] === t[i + shift]) i++;

  return i === m;

}
