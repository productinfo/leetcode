/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var search = function(A, target) {

  var low = 0,
      high = A.length - 1,
      mid;

  while (low <= high) {

    mid = Math.floor((low + high) / 2);

    if (A[mid] === target) {
      return mid;
    } else if (A[low] <= A[mid]) {

      // incresing
      if (A[low] <= target && target < A[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }

    } else {

      // decreasing
      if (A[mid] < target && target <= A[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

    }

  }

  return -1;

};