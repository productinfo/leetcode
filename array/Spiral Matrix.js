/**
 * @param {number[][]} matrix
 * @return {number[]
 */
var spiralOrder = function(matrix) {

  var res = [];

  if (!matrix) {
    return res;
  }

  var yl = matrix.length;
  
  if (yl === 0) {
      return res;
  }
  
  var xl = matrix[0].length,
      xs = 0,
      ys = 0,
      x, y;

  while (xs < xl && ys < yl) {

    // first row
    for (x = xs ; x < xl ; x++) {

      res.push(matrix[ys][x]);

    }

    ys++;

    // last col
    for (y = ys ; y < yl ; y++) {

      res.push(matrix[y][xl - 1]);

    }

    xl--;

    // last row
    if (ys < yl) {
      for (x = xl - 1 ; x >= xs ; x--) {
        res.push(matrix[yl - 1][x]);
      }

      yl--;
    }

    // first col
    if (xs < xl) {
      for (y = yl - 1 ; y >= ys ; y--) {
        res.push(matrix[y][xs]);
      }
      xs++;
    }

  }

  return res;
};