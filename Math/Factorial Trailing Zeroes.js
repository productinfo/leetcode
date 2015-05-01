/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

  if (n < 0) {
    return 0;
  }

  var i = 5, five = 0;

  // count how may 5's
  for (; (n / i) >> 0 >= 1 ; i *= 5) {
    five += (n / i) >> 0;
  }

  return five;

};