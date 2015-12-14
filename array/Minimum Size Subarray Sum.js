/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

  var len = nums.length,
      reach = len,
      i = 0, sum = 0, index = 0;

  for (; i < len ; i++) {

    sum += nums[i];

    if (sum >= s) {

      while (sum - nums[index] >= s) {
        sum -= nums[index++];
      }

      reach = Math.min(reach, i - index + 1);

    }

  }

  return reach >= len ? 0 : reach;

};
