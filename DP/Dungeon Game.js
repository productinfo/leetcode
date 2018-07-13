/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {

  if (!dungeon) {
    return 0;
  }

  var yl = dungeon.length;
  var xl = dungeon[0].length;

  var dp = [];

  var x, y;

  for (y = 0 ; y < yl ; y++) {
    dp.push([]);
  }

  dp[yl - 1][xl - 1] = Math.max(1 - dungeon[yl - 1][xl - 1], 1);

  for (y = yl - 2 ; y >= 0 ; y--) {
    dp[y][xl - 1] = Math.max(dp[y + 1][xl - 1] - dungeon[y][xl - 1], 1);
  }

  for (x = xl - 2 ; x >= 0 ; x--) {
    dp[yl - 1][x] = Math.max(dp[yl - 1][x + 1] - dungeon[yl - 1][x], 1);
  }

  for (y = yl - 2 ; y >= 0 ; y--) {
    for (x = xl - 2 ; x >= 0 ; x--) {

      var down = Math.max(dp[y + 1][x] - dungeon[y][x], 1);
      var right = Math.max(dp[y][x + 1] - dungeon[y][x], 1);

      dp[y][x] = Math.min(right, down);

    }
  }

  return dp[0][0];
};

// 4/7/2018
var calculateMinimumHP = function(dungeon) {
  if (!dungeon) return 0;
  const yl = dungeon.length;
  if (!yl) return 0;
  const xl = dungeon[0].length;
  const dp = [];
  for (let y = 0; y < yl; y++) {
    dp.push([]);
  }
  dp[yl - 1][xl - 1] = Math.max(1 - dungeon[yl - 1][xl - 1], 1);
  for (let y = yl - 2; y >= 0; y--) {
    dp[y][xl - 1] = Math.max(dp[y + 1][xl - 1] - dungeon[y][xl - 1], 1);
  }
  for (let x = xl - 2; x >= 0; x--) {
    dp[yl - 1][x] = Math.max(dp[yl - 1][x + 1] - dungeon[yl - 1][x], 1);
  }
  for (let y = yl - 2; y >= 0; y--) {
    for (let x = xl - 2; x >= 0; x--) {
      dp[y][x] = Math.min(
        Math.max(dp[y + 1][x] - dungeon[y][x], 1),
        Math.max(dp[y][x + 1] - dungeon[y][x], 1)
      );
    }
  }
  return dp[0][0];
};
