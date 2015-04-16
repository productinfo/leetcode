/**
 * @param {number[][]} matrix
 * @return {number[]
 */
var spiralOrder = function(matrix) {
  /*  k - starting row index
      m - ending row index
      l - starting column index
      n - ending column index
      i - iterator
  */

  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  var k = 0, // y start
      m = matrix.length, // y
      l = 0, // x start
      n = matrix[0].length, // x
      i,
      result = [];

  while (k < m && l < n) {

    // first row
    for (i = l ; i < n ; i++) {

      result.push(matrix[k][i]);

    }

    k++;

    // last col
    for (i = k ; i < m ; i++) {

      result.push(matrix[i][n - 1]);

    }

    n--;

    // last row
    if (k < m) {
      for (i = n - 1 ; i >= l ; i--) {
        result.push(matrix[m - 1][i]);
      }

      m--;
    }

    // first col
    if (l < n) {

      for (i = m - 1 ; i >= k ; i--) {
        result.push(matrix[i][l]);
      }

      l++;

    }
  }

  return result;
};