/**
 * @param {number[]} A
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(A, target) {

  var low = 0, high = A.length - 1, mid;

  while (low <= high) {

    mid = (low + high) >> 1;

    if (target === A[mid]) {
      // return mid;
      
      var left = mid, right = mid;

      while (left >= 0 && A[left] === target) {
        left--;
      }

      while (right < A.length && A[right] === target) {
        right++;
      }

      return [left + 1, right - 1];

    } else if (target > A[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }

  return [-1, -1];

};