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

  var go = end;

  while (go - 1 >= 0 && s[go - 1] !== ' ') {
    go--;
  }

  return end - go + 1;

};