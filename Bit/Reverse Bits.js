/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

  for (int i = 0; i < 16; i++) {
    n = swapBits(n, i, 32 - i - 1);
  }
 
  return n;

};

var swapBits = function (n, i, j) {
  var a = (n >> i) & 1;
  var b = (n >> j) & 1;
 
  if ((a ^ b) != 0) {
    return n ^= (1 << i) | (1 << j);
  }
 
  return n;
};