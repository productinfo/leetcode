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

// 9/25/2016
var minimumTotal = function(triangle) {
  const yl = triangle.length;
  const xl = triangle[0].length;
  const res = [];
  for (let y = yl - 2; y >= 0; y--) {
    for (let x = y; x >= 0; x--) {
      triangle[y][x] = triangle[y][x] + Math.min(triangle[y + 1][x], triangle[y + 1][x + 1]);
    }
  }
  return triangle[0][0];
};

// 11/13/2016
const minimumTotal = triangle => {
  const yl = triangle.length;
  const dp = triangle[yl - 1].slice();
  for (let y = yl - 2; y >= 0; y--) {
    for (let x = 0, l = triangle[y].length; x < l; x++) {
      dp[x] = triangle[y][x] + Math.min(dp[x], dp[x + 1]);
    }
  }
  return dp[0];
};

// 11/28/2016
const minimumTotal = triangle => {
  const yl = triangle.length;
  for (let i = yl - 2; i >= 0; i--) {
    const pv = triangle[i + 1];
    for (let l = triangle[i].length, j = 0; j < l; j++) {
      triangle[i][j] += Math.min(pv[j], pv[j + 1]);
    }
  }
  return triangle[0][0];
};
