/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var go = function (left, right) {

    if (left === right) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = left + Math.floor((left + right) / 2);

    if (nums[left] < nums[right]) {
      // not rotate
      return nums[left];
    } else if (nums[mid] > nums[left]) {
      // go right
      return go(mid, right);
    } else {
      // go left
      return go(left, mid);
    }

  };

  return go(0, nums.length - 1);

};