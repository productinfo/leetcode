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

  var l = 1;

  while (x / l >= 10) {
    l *= 10;
  }

  while (x !== 0) {

    var right = x % 10;
    var left = (x / l) >> 0;

    if (left !== right) {
      return false;
    }

    x %= l;
    x = (x / 10) >> 0;

    l = (l / 100) >> 0;

  }

  return true;

};