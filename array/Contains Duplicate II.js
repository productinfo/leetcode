/**
 * Given an array of integers and an integer k, find out whether there there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
  if (!nums) {
    return false;
  }

  var len = nums.length;

  if (len === 0) {
    return false;
  }

  var map = {}, i = 0, j, diff;

  for (; i < len ; i++) {

    if (map.hasOwnProperty(nums[i])) {

      j = map[nums[i]];

      diff = i - j;

      map[nums[i]] = i;

      if (diff <= k) {
        return true;
      }

    } else {
      map[nums[i]] = i;
    }

  }

  return false;

};