/**
1. P[0][j] = matrix[0][j] (topmost row);
2. P[i][0] = matrix[i][0] (leftmost column);
3. For i > 0 and j > 0: if matrix[i][j] = 0, P[i][j] = 0; if matrix[i][j] = 1, P[i][j] = min(P[i - 1][j], P[i][j - 1], P[i - 1][j - 1]) + 1.
 */
// O(n ^ 2)
const maximalSquare = matrix => {
  const yl = matrix.length;
  if (!yl) return 0;
  const xl = matrix[0].length;
  const dp = [];
  let max = 0;
  for (let y = 0; y < yl; y++) {
		dp.push([]);
    for (let x = 0; x < xl; x++) {
        dp[y][x] = (+matrix[y][x]);
    }
  }
  for (let x = 0; x < xl; x++) {
    max = Math.max(max, dp[0][x]);
  }
  for (let y = 1; y < yl; y++) {
    max = Math.max(max, dp[y][0]);
  }
  for (let y = 1; y < yl; y++) {
    for (let x = 1; x < xl; x++) {
      if (dp[y][x]) {
        dp[y][x] = Math.min(
          dp[y][x - 1],
          dp[y - 1][x],
          dp[y - 1][x - 1]
        ) + 1;
        max = Math.max(max, dp[y][x]);
      }
    }
  }
  return max * max;
};