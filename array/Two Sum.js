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

// 9/23/2016
const twoSum = (arr, target) => {
  const len = arr.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (arr[i] in map) {
      return [map[arr[i]], i];
    } else {
      map[target - arr[i]] = i;
    }
  }
  return [-1, -1];
};

// 10/21/2016
var twoSum = function(nums, target) {
  const noResult = [-1, -1];
  if (!nums || target === undefined || !Array.isArray(nums)) return noResult;
  const len = nums.length;
  if (!len) return noResult;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i;
    }
  }
  return noResult;
};

// 11/16/2016
const twoSum = (arr, target) => {
  const map = {};
  for (let l = arr.length, i = 0; i < l; i++) {
    const index = target - arr[i];
    if (index in map) return [map[index], i];
    map[arr[i]] = i;
  }
  return [-1, -1];
};