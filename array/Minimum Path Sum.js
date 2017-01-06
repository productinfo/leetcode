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

// 3/30/2016
const minPathSum = (g) => {

  const yl = g.length, xl = g[0].length, dp = [0];

  for (let x = 1; x < xl; x++) {
    dp.push(Number.MAX_VALUE);
  }

  for (let y = 0; y < yl; y++) {
    dp[0] = dp[0] + g[y][0];
    for (let x = 1; x < xl; x++) {
      dp[x] = Math.min(dp[x], dp[x - 1]) + g[y][x];
    }
  }

  return dp[xl - 1];
};

// 9/25/2016
var minPathSum = function(grid) {
  const yl = grid.length;
  const xl = grid[0].length;
	const dp = grid[0].slice();
  for (let x = 1; x < xl; x++) {
    dp[x] += dp[x - 1];
  }
  // console.log(dp);
  for (let y = 1; y < yl; y++) {
    dp[0] += grid[y][0];
    for (let x = 1; x < xl; x++) {
      dp[x] = Math.min(dp[x - 1], dp[x]) + grid[y][x];
    }
  }
  return dp[xl - 1];
};
