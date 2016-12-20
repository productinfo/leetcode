/**
 * @param {number[]} A
 * @param {number} target
 * @return {boolean}
 */
var search = function(A, target) {

  var len = A.length, i = 0;

  for (; i < len ; i++) {
    if (target === A[i]) {
      return true;
    }
  }

  return false;

};

// 11/5/2016
const search = (arr, target) => {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let m = (l + h) >> 1;
    if (arr[m] === target) {
      return true;
    } else if (arr[l] === arr[m]) {
      l++;
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
  return false;
}