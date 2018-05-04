/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const tmp = [1];
  let ans = 0;
  let total = 0;
  for (const n of nums) {
    total += n;
    ans += tmp[total - k] || 0;
    tmp[total] = tmp[total] || 0;
    tmp[total]++;
  }
  return ans;
};