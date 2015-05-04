/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

  if (x === 0) {
    return 0;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  if (x === 1) {
    return x;
  }

  var z = Math.pow(x, n >> 1);
  var y = z * z;

  if (n % 2 === 0) {
    return y;
  } else if (n > 0) {
    return y * x;
  } else {
    return y / x;
  }

};