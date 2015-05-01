/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
  var end = s.length - 1;

  while (end >= 0 && s[end] == ' ') {
    end--;
  }

  if (end < 0) {
    return 0;
  }

  var go = end - 1;

  while (go >= 0 && s[go] !== ' ') {
    go--;
  }

  return end - go;

};