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

// 4/5/2017
const isOneModified = (a, b) => {
  let modified = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (modified) return false;
      modified = true;
    }
  }
  return modified;
};

const isOneDeleted = (longer, shorter) => {
  for (let i = 0; i < shorter.length; i++) {
    if (longer[i] !== shorter[i]) {
      return longer.substring(i + 1) === shorter.substring(i);
    }
  }
  return true;
};

const isOneEditDistance = (s, t) => {
  const sl = s.length;
  const tl = t.length;
  if (sl === tl) return isOneModified(s, t);
  if (sl - tl === 1) return isOneDeleted(s, t);
  if (tl - sl === 1) return isOneDeleted(t, s);
  return false;
};

// 4/12/2017
const checkOneCharDiff = (longer, shorter) => {
  for (let i = 0; i < shorter.length; i++) {
    if (shorter[i] !== longer[i]) {
      return longer.substring(i + 1) === shorter.substring(i);
    }
  }
  return true;
};

const checkSameLength = (s, t) => {
  let diff = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) diff += 1;
  }
  return diff === 1;
};

const isOneEditDistance = (s, t) => {
  if (typeof s !== 'string' || typeof t !== 'string') return false;
  const sl = s.length;
  const tl = t.length;
  if (sl === tl) return checkSameLength(s, t);
  if (sl - tl === 1) return checkOneCharDiff(s, t);
  if (tl - sl === 1) return checkOneCharDiff(t, s);
  return false;
};