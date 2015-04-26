/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  var l = nums.length;

  if (!nums || l === 0) {
    return 0;
  }

  if (l === 1) {
    return nums[0]
  }

  var dp = [nums[0], Math.max(nums[0], nums[1])]

  for (var i = 2 ; i < l ; i++) {

    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);

  }

  return dp[l - 1];

};