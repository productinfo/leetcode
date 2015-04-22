/**
 * @param {number[][]} obstacleGrid
 * @returns {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  var yl = obstacleGrid.length,
      xl = obstacleGrid[0].length;

  if (yl < 0 || xl < 0) {
    return 0;
  }

  var res = [];

  var i, j;

  for (i = 0 ; i < yl ; i++) {
    res.push([]);
  }

  for (i = 0 ; i < xl ; i++) {

    if (obstacleGrid[0][i] !== 1) {
      res[0][i] = 1;
    } else {
      res[0][i] = 0;
    }

  }

  for (i = 0 ; i < yl ; i++) {

    if (obstacleGrid[i][0] !== 1) {
      res[i][0] = 1;
    } else {
      res[i][0] = 1;
    }

  }

  for (i = 1 ; i < xl ; i++) {
    for (j = 1 ; j < yl ; j++) {

      if (obstacleGrid[j][i] === 1) {
        res[j][i] = 0;
      } else {
        res[j][i] = res[j - 1][i] + res[j][i - 1];
      }

    }
  }

  return res[yl - 1][xl - 1];

};