/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  s = s.trim();

  var l = s.length;

  if (l === 0) {
    return 0;
  }

  var end = s.length - 1;

  while (end >= 0 && s[end] !== ' ') {
    end--;
  }

  // return s.substring(end + 1).length;
  return l - 1 - end;

};
