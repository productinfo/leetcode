/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// 4/7/2016
const isAnagram = (s, t) => {

  if (s.length !== t.length) return false;

  const len = s.length;

  const map = {};

  for (let i = 0; i < len; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < len; i++) {
    if (!map[t[i]]) return false;
    else {
      map[t[i]]--;
      if (map[t[i]] < 0) {
        return false;
      }
    }
  }

  return true;
};

// 9/15/2016
var isAnagram = function(s, t) {
  const l1 = s.length;
  const l2 = t.length;
  if (l1 !== l2) return false;
  const map = {};
  for (let i = 0; i < l1; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < l2; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      return false;
    }
  }
  for (let k in map) {
    if (map[k] !== 0) return false;
  }
  return true;
};

// 9/16/2016
var isAnagram = function(s, t) {
  const l1 = s.length;
  const l2 = t.length;
  if (l1 !== l2) return false;
  const map = {};
  for (let i = 0; i < l1; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < l2; i++) {
    if (t[i] in map) {
      map[t[i]]--;
    } else {
      return false;
    }
  }
  return Object.keys(map).every(item => map[item] === 0);
};
