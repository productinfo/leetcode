/**
 * Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {

  if (!nums) {
    return false;
  }

  var len = nums.length, i = 0,
      target, index;

  for (; i < len ; i++) {

    target = t - nums[i];

    index = bs(nums, target);

    if (index > 0 && Math.abs(index - i) <= k) {
      return true;
    }

  }

  return false;

};

var bs = function (arr, target) {

  var left = 0, right = arr.length - 1, mid;

  while (left <= right) {

    mid = (left + right) >> 1;

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }

  return -1;

};