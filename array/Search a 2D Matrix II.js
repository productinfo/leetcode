/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  var yl = matrix.length,
      xl = matrix[0].length;

  var search = function (xs, xe, ys, ye) {

    if (xs > xe || ys > ye) return false;

    var mx = (xs + xe) >> 1,
        my = (ys + ye) >> 1;

    if (matrix[my][mx] === target) return true;
    else if (matrix[my][mx] > target)
      return search(xs, mx - 1, ys, my - 1) || search(xs, xe, ys, my - 1) || search(xs, mx - 1, ys, ye);
    else
      return search(mx + 1, xe, my + 1, ye) || search(mx + 1, xe, ys, ye) || search(xs, xe, my + 1, ye);
  };

  return search(0, xl - 1, 0, yl - 1);

};

// 9/12/2016
/**
 O(m + n)
 */
var searchMatrix = function(matrix, target) {

  let y = 0;
  let x = matrix[0].length - 1;
  const yl = matrix.length;
  while (y < yl && x >= 0) {
    if (matrix[y][x] === target) {
      return true;
    }
    if (matrix[y][x] < target) {
      y++;
    } else {
      x--;
    }
  }
  return false;
};
