/**

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)


*/
/**
 Given nums = [1, -1, 5, -2, 3], k = 3,
 return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)
 */
var maxSubArrayLen = function(nums, k) {
  let sum = 0;
  let max = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) max = i + 1;
    else if ((sum - k) in map) max = Math.max(max, i - map[sum - k]);
    if (!(sum in map)) map[sum] = i
  }
  return max;
};