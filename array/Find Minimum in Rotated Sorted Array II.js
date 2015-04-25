/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var l = nums.length;

  var go = function (left, right) {

    if (left === right) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = Math.floor((left + right) / 2);

    if (nums[left] < nums[right]) {
      return nums[left];
    } else if (nums[left] === nums[right]) {
      // shift one
      return go(left + 1, right);
    } else if (nums[left] <= nums[mid]) {
      // go right
      return go(mid, right);
    } else {
      // go left
      return go(left, mid);
    }

  };

  return go(0, l - 1);

};