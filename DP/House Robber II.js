var rob1 = function(nums, st, len) {

  if (len === 0) {
    return 0;
  }

  if (len === 1) {
    return nums[st];
  }

  var dp = [nums[st], Math.max(nums[st], nums[st + 1])]

  for (var i = 2 ; i < len ; i++) {

    dp[i] = Math.max(dp[i - 1], nums[st + i] + dp[i - 2]);

  }

  return dp[len - 1];

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  if (!nums) {
    return 0;
  }

  var len = nums.length;

  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return nums[0];
  } else {
    return Math.max(rob1(nums, 0, len - 1), rob1(nums, 1, len - 1));
  }

};