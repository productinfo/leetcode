/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

  var ll = triangle.length;

  if (!triangle || ll === 0) {
    return 0;
  }

  var i, j;

  var res = triangle[ll - 1];

  // from last second row
  for (i = ll - 2 ; i >= 0 ; i--) {

    for (j = 0 ; j < triangle[i].length ; j++) {

      res[j] = triangle[i][j] + Math.min(res[j], res[j + 1]);

    }

  }

  return res[0];

};

// 4/4/2016
const minimumTotal = (t) => {

  const yl = t.length;
  const dp = t[yl - 1];
  for (let y = yl - 2; y >= 0; y--) {
    for (let x = 0; x < t[y].length; x++) {
      dp[x] = Math.min(dp[x], dp[x + 1]) + t[y][x];
    }
  }

  return dp[0];
};
