/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  var yl = obstacleGrid.length,
      xl = obstacleGrid[0].length;

  if (yl < 0 || xl < 0) {
    return 0;
  }

  if (obstacleGrid[0][0] === 1) return 0;
  if (obstacleGrid[yl - 1][xl - 1] === 1) return 0;

  var block = false, x, y;

  for (x = 1 ; x < xl ; x++) {
    if (obstacleGrid[0][x] === 1) block = true;
    obstacleGrid[0][x] = block ? 0 : 1;
  }

  block = false;
  for (y = 1 ; y < yl ; y++) {
    if (obstacleGrid[y][0] === 1) block = true;
    obstacleGrid[y][0] = block ? 0 : 1;
  }

  obstacleGrid[0][0] = 1;

  for (y = 1 ; y < yl ; y++) {
    for (x = 1 ; x < xl ; x++) {

      obstacleGrid[y][x] = obstacleGrid[y][x] === 1 ? 0 : obstacleGrid[y - 1][x] + obstacleGrid[y][x - 1];

    }
  }

  return obstacleGrid[yl - 1][xl - 1];
};
