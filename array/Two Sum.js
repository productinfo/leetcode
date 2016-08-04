// 2/17/2016
// 8/3/2016
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  const map = {};
  const len = nums.length;

  for (let i = 0; i < len ; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i
    }
  }

  return [-1, -1];

};
