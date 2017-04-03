// has to use DP
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