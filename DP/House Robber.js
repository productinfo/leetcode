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

// 9/25/2016
var rob = function(nums) {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[len - 1];
};

// 4/8/2018
var rob = function(nums) {
  if (!nums.length) return 0;
    let v1 = nums[0];
    if (nums.length === 1) return v1;
    let v2 = Math.max(nums[0], nums[1]);
    let v3 = v2;
    for (let i = 2; i < nums.length; i++) {
        v3 = Math.max(v2, v1 + nums[i]);
        v1 = v2;
        v2 = v3;
    }
    return v3;
};
