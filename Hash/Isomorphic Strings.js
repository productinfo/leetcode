/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  if (s.length !== t.length) {
    return false;
  }

  return valid(s, t) && valid(t, s);
};

var valid = function (s1, s2) {

  var map = {};

  var l = s1.length;

  for (var i = 0 ; i < l ; i++) {

    if (map[s1[i]]) {
      // match
      if (map[s1[i]] !== s2[i]) {
        return false;
      }
    } else {
      // not match
      map[s1[i]] = s2[i];
    }

  }

  return true;

};

// 9/26/2016
var isIsomorphic = function(s, t) {
  const l1 = s.length;
  const l2 = t.length;
  if (l1 !== l2) return false;
  return valid(s, t) && valid(t, s);
};

const valid = (s1, s2) => {
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in map) {
      if (map[s1[i]] !== s2[i]) return false;
    } else {
      map[s1[i]] = s2[i];
    }
  }
  return true;
}

// 11/30/2016
const valid = (s1, s2) => {
  const map = {};
  for (let l = s1.length, i = 0; i < l; i++) {
    if (map[s1[i]] && map[s1[i]] !== s2[i]) return false; 
    map[s1[i]] = s2[i];
  }
  return true;
};
const isIsomorphic = (s, t) => s.length === t.length && valid(s, t) && valid(t, s)