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
