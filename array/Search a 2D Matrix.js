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

// 11/8/2016
const searchMatrix = (matrix, target) => {
  const yl = matrix.length;
  const xl = matrix[0].length;
  let x = xl - 1;
  let y = 0;
  while (y < yl && x >= 0) {
    if (matrix[y][x] === target) {
      return true;
    } else if (matrix[y][x] < target) {
      y++;
    } else {
      x--;
    }
  }
  return false;
};