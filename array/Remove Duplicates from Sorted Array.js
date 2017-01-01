/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

  var c = 0, len = A.length;

  if (len === 0 || len === 1) {
    return len;
  }

  if (len === 2) {
    return A[0] === A[1] ? 1 : 2;
  }

  var a = 0, b = 1;

  while (a < len && b < len) {

    if (A[a] === A[b]) {
      b++;
    } else {

      A[++a] = A[b];

    }

  }

  return a + 1;

};

// 9/11/2016
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (!len) return -1;
  let a = 0;
  let b = 1;
  while (a < len && b < len) {
    if (nums[a] === nums[b]) {
      b++;
    } else {
      nums[++a] = nums[b];
    }
  }
  return a + 1;
};
