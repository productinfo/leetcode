// [1, 2, 3], 5
// true
const checkSubarraySum = (arr, k) => {
  let total = 0;
  const map = {
    0: -1
  };
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (k !== 0) total %= k;
    const pv = map[total];
    if (pv !== undefined) {
      if (i - pv > 1) return true;
    } else {
      map[total] = i;
    }
  }
  return false;
};

// 8/24/2017
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = {
    0: -1
  };
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (k !== 0) total %= k;
    if (total in map) {
      if (i - map[total] > 1) return true;
    } else {
      map[total] = i;
    }
  }
  return false;
};