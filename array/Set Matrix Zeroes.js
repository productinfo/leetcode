/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
  if (matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  var rowHas0 = false, colHas0 = false, x, y;

  for (x = 0 ; x < matrix[0].length ; x++) {
    if (matrix[0][x] === 0) {
      rowHas0 = true;
      break;
    }
  }

  for (y = 0 ; y < matrix.length ; y++) {

    if (matrix[y][0] === 0) {
      colHas0 = true;
      break;
    }

  }

  // go digonal
  for (y = 1 ; y < matrix.length ; y++) {
    for (x = 1 ; x < matrix[0].length ; x++) {

      if (matrix[y][x] === 0) {

        matrix[y][0] = 0;
        matrix[0][x] = 0;

      }

    }
  }

  for (y = 1 ; y < matrix.length ; y++) {

    if (matrix[y][0] === 0) {

      for (x = 1 ; x < matrix[0].length ; x++) {
        matrix[y][x] = 0;
      }

    }

  }

  for (x = 1 ; x < matrix[0].length ; x++) {

    if (matrix[0][x] === 0) {

      for (y = 1 ; y < matrix.length ; y++) {
        matrix[y][x] = 0
      }

    }

  }

  if (rowHas0) {
    for (x = 0 ; x < matrix[0].length ; x++) {
      matrix[0][x] = 0;
    }
  }

  if (colHas0) {
    for (y = 0 ; y < matrix.length ; y++) {
      matrix[y][0] = 0;
    }
  }

};