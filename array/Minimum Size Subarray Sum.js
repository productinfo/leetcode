/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * [2,3,1,2,4,3] and s = 7 -> [4, 3]
 */
var minSubArrayLen = function(s, nums) {
    
  var len = nums.length;

  if (len === 0) {
    return 0;
  }

  var curSum = 0, start = 0, end = 0, min = 0;

  while (end < len) {

    while (curSum < s && end < len) {
      curSum += nums[end++];
    }

    while (curSum >= s && start < end) {

      if (end - start < min || min === 0) {
        min = end - start;
      }

      curSum -= nums[start++];

    }

  }

  return min;
};