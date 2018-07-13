// DFS
// timeout
var numSquares = function(n) {
  if (n < 1) return 0;
  let min = Infinity;
  let i = 1;
  const tmp = [];
  while (i * i <= n) {
    const sq = i * i;
    if (sq === n) return 1;
    tmp.unshift(sq);
    i++;
  }
  const dfs = (rem, cur) => {
    if (rem === 0) {
      min = Math.min(min, cur);
      return;
    }
    for (let j = 0; j < tmp.length; j++) {
      if (rem < tmp[j]) continue;
      dfs(rem - tmp[j], cur + 1);
    }
  };
  dfs(n, 0);
  return min;
};

// 4/28/2018
var numSquares = function(n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
