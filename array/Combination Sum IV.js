// O(n ^ 2)
// has to use DP
// dp[3] = 1 + c(2) -> dp[2]
//         2 + c(1) -> dp[1]
//         3 + c(0) -> dp[0]
const combinationSum4 = (arr, target) => {
  const dp = Array.from({ length: target + 1 }, (v, i) => i ? 0 : 1);
  const len = arr.length;
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < len; j++) {
      if (i < arr[j]) break;
      dp[i] += dp[i - arr[j]];
    }
  }
  return dp[target];
};

/**
 nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 */
/**
 
c(4) = 1, c(3) = dp[4 - arr[0]]
       2, c(2) = dp[4 - arr[1]]
       3, c(1) = dp[4 - arr[2]]

c(3) = 1, c(2) = dp[3 - arr[0]]
       2, c(1) = dp[3 - arr[1]]

c(2) = 1, c(1) = dp[2 - arr[0]];

c(1) = 1, c(0)

[1, 0, 0, 0, 0]

 */
const combinationSum4 = (nums, target) => {
  const len = nums.length;
  if (!len) return 0;
  const dp = Array.from({ length: target + 1 }, (v, i) => i ? 0 : 1);
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[j] > i) break;
      dp[i] += dp[i - nums[j]];
    }
  }
  return dp[target];
};