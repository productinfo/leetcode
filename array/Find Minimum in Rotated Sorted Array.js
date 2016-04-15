/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var binary = function (left, right) {

    if (left === right || nums[left] < nums[right]) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = (left + right) >> 1;

    if (nums[mid] > nums[left]) {
      // go right
      return binary(mid, right);
    } else {
      // go left
      return binary(left, mid);
    }

  };

  return binary(0, nums.length - 1);

};

// 4/6/2016
const findPeakElement = (n) => {

  let low = 0, high = n.length - 1;

  while (low < high) {

    const m = (low + high) >> 1;

    if (n[m] > n[m + 1]) {
      high = m;
    } else if (n[m] < n[m + 1]) {
      low = m + 1;
    }
  }

  return low;

};
