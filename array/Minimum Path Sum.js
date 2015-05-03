var minPathSum = function(grid) {

  var yl = grid.length;
  var xl = grid[0].length;

  if (yl < 0 || xl < 0) {
    return 0;
  }

  var dp = [0];

  var x, y;

  for (x = 1 ; x < xl ; x++) {
    dp.push(Number.MAX_VALUE);
  }

  for (y = 0 ; y < yl ; y++) {

    dp[0] = dp[0] + grid[y][0];

    for (x = 1 ; x < xl ; x++) {

      dp[x] = grid[y][x] + Math.min(dp[x - 1], dp[x]);

    }
  }

  return dp[xl - 1];

};