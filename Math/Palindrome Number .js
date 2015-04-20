/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  var s = x.toString();

  var start = 0, last = s.length - 1;

  while (start < last) {

    if (s[start] !== s[last]) {
      return false;
    }

    start++;
    last--;

  }

  return true;

};