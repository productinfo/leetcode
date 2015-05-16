/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  var yl = matrix.length;
  var xl = matrix[0].length;

  var start = 0, end = yl * xl - 1,
      mid, mX, mY;

  while (start <= end) {

    mid = (start + end) >> 1;

    mY = (mid / xl) >> 0;

    mX = mid % xl;

    if (matrix[mY][mX] === target) {
      return true;
    } else if (matrix[mY][mX] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

  }

  return false;

};