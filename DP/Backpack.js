const backPack = (m, arr) => {
  const dp = [];
  for (let i = 0; i <= arr.length; i++) {
    dp.push(Array(m + 1).fill(0));
  }
  for (let y = 1; y <= arr.length; y++) {
    for (let x = 0; x <= m; x++) {
      if (arr[y - 1] <= x) {
        dp[y][x] = Math.max(arr[y - 1] + dp[y - 1][x - arr[y - 1]], dp[y - 1][x]);
      } else {
        dp[y][x] = dp[y - 1][x];
      }
    }
  }
  return dp[arr.length][m];
};
