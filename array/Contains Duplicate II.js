/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

  if (k < 1 || !nums) return false;

  var len = nums.length;

  if (len === 0) return false;

  var i = 0, map = {};

  for (; i < len ; i++) {

    if (map.hasOwnProperty(nums[i])) {

      if (i - map[nums[i]] <= k) {
        return true;
      }

    }

    map[nums[i]] = i;

  }

  return false;

};
