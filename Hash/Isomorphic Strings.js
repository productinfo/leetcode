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