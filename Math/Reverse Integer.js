/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  if (x < 0) return -reverse(-x);

  if (x < 10) return x;

  var t = 0, d;

  while (x > 0) {

    d = x % 10;
    t = t * 10 + d;
    x = (x / 10) >> 0;

  }

  return t > Math.pow(2, 31) - 1 ? 0 : t;

};
