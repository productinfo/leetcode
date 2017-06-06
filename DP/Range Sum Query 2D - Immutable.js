class NumMatrix {
  constructor(matrix) {
    const yl = matrix.length;
    if (!yl) return;
    const xl = matrix[0].length;
    const dp = [];
    for (let y = 0; y <= yl; y++) {
      dp.push(Array(xl + 1).fill(0));
    }
    for (let y = 1; y <= yl; y++) {
      for (let x = 1; x <= xl; x++) {
        dp[y][x] = dp[y - 1][x] + dp[y][x - 1] - dp[y - 1][x - 1] + matrix[y - 1][x - 1];
      }
    }
    this.dp = dp;
  }
  sumRegion(y1, x1, y2, x2) {
    const dp = this.dp;
    return dp[y2 + 1][x2 + 1] - dp[y1][x2 + 1] - dp[y2 + 1][x1] + dp[y1][x1];
  }
}