/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  
  if (!matrix) {
    return;
  }

  var yl = matrix.length;
  var xl = matrix[0].length;

  var x, y, tmp;

  // swap up and down
  for (y = 0 ; y < yl >> 1 ; y++) {
    for (x = 0 ; x < xl ; x++) {

      tmp = matrix[y][x];

      matrix[y][x] = matrix[yl - 1 - y][x];

      matrix[yl - 1 - y][x] = tmp;
    }
  }

  // flip
  for (y = 1 ; y < yl ; y++) {
    for (x = 0 ; x < y ; x++) {
      tmp = matrix[y][x];

      matrix[y][x] = matrix[x][y];

      matrix[x][y] = tmp;
    }
  }

};