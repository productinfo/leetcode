/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(A, target) {

  var l = A.length;

  if (l === 0) {
    return 0;
  }

  var left = 0, right = l - 1, mid;

  while (left <= right) {

    mid = (right + left) >> 1;

    if (target === A[mid]) {
      return mid;
    } else if (target > A[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }

  // console.log(left, right);

  // var ans;

  // if (target > A[right]) {
  //   ans = right + 1;
  // } else if (target < A[left]) {
  //   ans = left;
  // } else {
  //   ans = left + 1
  // }

  return left;
  // return target > A[right] ? right + 1 : left + 1;

};