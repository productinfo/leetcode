/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  if (x === 0 || x === 1) {
    return x;
  }

  var low = 1, high = x, mid = 0;

  while (low <= high) {

    mid = (low + high) >> 1;

    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      break;
    }

    if (mid * mid > x) {
      high = mid - 1;
    } else {
      lwo = mid + 1;
    }

  }

  return mid;

};