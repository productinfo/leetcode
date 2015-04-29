/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  var sl = s.length;
  var pl = p.length;

  var i = 0, j = 0, star = -1, mark = -1;

  while (i < sl) {

    if (j < pl && (p[j] === '?' || p[j] === s[i])) {

      i++;
      j++;

    } else if (j < pl && p[j] === '*') {
      star = j;
      j++;
      mark = i;
    } else if (star !== -1) {

      j = star + 1;
      mark++;
      i = mark;

    } else {
      return false;
    }

  }

  while (j < pl && p[j] === '*') {
    j++;
  }

  return j === pl;

};