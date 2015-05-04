/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

  var c = 0;

  while (n) {
    if (n & 1) {
      c++;
    }

    n = n >> 1;
  }

  return c;
};