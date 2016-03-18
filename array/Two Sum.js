// 2/17/2016

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  var map = {}, result = [], i = 0, len = nums.length;

  for (; i < len ; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i
    }
  }

  return [-1, -1];

};
