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
  for (; Math.floor(n / i) >= 1 ; i *= 5) {
    five += Math.floor(n / i);
  }

  return five;

};