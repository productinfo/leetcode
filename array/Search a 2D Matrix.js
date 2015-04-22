/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {

  var yl = matrix.length, xl = matrix[0].length;

  if (!matrix || yl < 0 || xl < 0) {
    return false;
  }

  var low = 0, right = yl * xl - 1, mid;

  var mx, my;

  while (low <= right) {

    mid = Math.floor((low + right) / 2);

    mx = Math.floor(mid / xl);

    my = mid % xl;

    if (target === matrix[my][mx]) {

      return true;

    } else if (target > matrix[my][mx]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }

  return false;

};

var bs = function (n, t) {

  var low = 0, high = n.length - 1, mid;

  while (low <= high) {

    mid = Math.floor((low + high) / 2);

    if (n[mid] === t) {
      return mid;
    } else if (t > n[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }

  return -1;

};

// var searchMatrix = function(matrix, target) {

//   var yl = matrix.length, xl = matrix[0].length;

//   if (!matrix || yl < 0 || xl < 0) {
//     return false;
//   }

//   var x;

//   for (var i = 0 ; i < matrix.length ; i++) {

//     x = bs(matrix[i], target);

//     if (x !== -1) {
//       return true;
//     }

//   }

//   return false;

// };

// var bs = function (n, t) {

//   var low = 0, high = n.length - 1, mid;

//   while (low <= high) {

//     mid = Math.floor((low + high) / 2);

//     if (n[mid] === t) {
//       return mid;
//     } else if (t > n[mid]) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }

//   }

//   return -1;

// };
