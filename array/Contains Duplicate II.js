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

// 9/7/2016
var containsNearbyDuplicate = function(nums, k) {
  const len = nums.length;
  if (!len) return false;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map.hasOwnProperty(nums[i]) && Math.abs(map[nums[i]] - i) <= k) return true;
    map[nums[i]] = i;
  }
  return false;
};

// 10/5/2016
var containsNearbyDuplicate = function(nums, k) {
  const len = nums.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (nums[i] in map && i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
};
