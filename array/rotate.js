/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  
  if (matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  var x, y, tmp;

  // swap left and right
  for (x = 0 ; x < matrix[0].length ; x++) {
  
    for (y = 0 ; y < matrix.length / 2 ; y++) {

      tmp = matrix[y][x];

      matrix[y][x] = matrix[matrix.length - 1 - y][x];

      matrix[matrix.length - 1 - y][x] = tmp;
    }   

  }

  // flip matrix
  for (y = 1 ; y < matrix.length ; y++) {

      for (x = 0 ; x < y ; x++) {

        tmp = matrix[y][x];

        matrix[y][x] = matrix[x][y];

        matrix[x][y] = tmp;

      }

  }   

};