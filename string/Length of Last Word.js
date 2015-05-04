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

  var go = end - 1;

  while (go >= 0 && s[go] !== ' ') {
    go--;
  }

  return end - go;

};