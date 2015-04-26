/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  var p = Math.abs(dividend);
  var q = Math.abs(divisor);
  var MAX = Math.pow(2, 31) - 1;

  var res = 0;

  while (p >= q) {

    var counter = 0;

    while (p >= (q << counter)) {
      counter++;
    }

    res += 1 << (counter - 1);
    p -= q << (counter - 1);
  }

  if (dividend === MAX && divisor === -1) {
    return MAX;
  }

  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    return res;
  } else {
    return -res;
  }

};