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

    mid = (low + high) >> 1;

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

// 10/21/2016
const search = (arr, target) => {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let m = (l + h) >> 1;
    if (arr[m] === target) {
      return m;
    } else if (arr[l] <= arr[m]) {
      if (arr[l] <= target && target < arr[m]) {
        h = m - 1;
      } else {
        l = m + 1
      }
    } else {
      if (arr[m] < target && target <= arr[h]) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
  }
  return -1;
};
