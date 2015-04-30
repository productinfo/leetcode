/**
 * @param {number} n
 * @returns {number[][]}
 */
var generateMatrix = function(n) {

  var ys = 0,
      xs = 0,
      y = n,
      x = n,
      i,
      matrix = [],
      val = 1;

  for (i = 0 ; i < n ; i++) {
    matrix.push([]);
  }

  while (ys < y && xs < x) {

    // first row
    for (i = xs ; i < x ; i++) {

      matrix[ys][i] = val++;

    }

    ys++;

    // last col
    for (i = ys ; i < y ; i++) {

      matrix[i][x - 1] = val++;

    }

    x--;

    // last row
    if (ys < y) {
      for (i = x - 1 ; i >= xs ; i--) {
        matrix[y - 1][i] = val++;
      }

      y--;
    }

    // first col
    if (xs < x) {

      for (i = y - 1 ; i >= ys ; i--) {
        matrix[i][xs] = val++;
      }

      xs++;

    }
  }

  return matrix;
};