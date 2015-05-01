/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var binary = function (left, right) {

    if (left === right) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = (left + right) >> 1;

    if (nums[left] < nums[right]) {
      // not rotate
      return nums[left];
    } else if (nums[mid] > nums[left]) {
      // go right
      return binary(mid, right);
    } else {
      // go left
      return binary(left, mid);
    }

  };

  return binary(0, nums.length - 1);

};