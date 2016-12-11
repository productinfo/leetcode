/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  var res = []

  if (m < 0 || n < 0) {
    return res;
  }

  var i, j;

  for (i = 0 ; i < n ; i++) {
    res.push([]);
  }

  for (i = 0 ; i < m ; i++) {
    res[0][i] = 1;
  }

  for (i = 0 ; i < n ; i++) {
    res[i][0] = 1;
  }

  for (i = 1 ; i < m ; i++) {
    for (j = 1 ; j < n ; j++) {
      res[j][i] = res[j - 1][i] + res[j][i - 1];
    }
  }

  return res[n - 1][m - 1];
};

// 3/30/2016
const x = (m, n) => {

  const g = [];

  for (let y = 0; y < n; y++) {
    g.push([]);
  }

  for (let y = 0; y < n; y++) {
    g[y][0] = 1;
  }

  for (let x = 0; x < m; x++) {
    g[0][x] = 1;
  }

  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      g[y][x] = g[y - 1][x] + g[y][x - 1];
    }
  }

  return g[n - 1][m - 1];
};

// 4/19/2016
var uniquePaths = function(x, y) {

  const dp = [];

  for (let i = 0; i < x; i++) {
    dp.push(1);
  }

  for (let j = 1; j < y; j++) {

    for (let i = 1; i < x; i++) {

      dp[i] += dp[i - 1];

    }

  }

  console.log(dp);

  return dp[x - 1];

};

// 9/25/2016
var uniquePaths = function(x, y) {
  const dp = Array.from({ length: x }, v => 1);
  for (let j = 1; j < y; j++) {
    for (let i = 1; i < x; i++) {
      dp[i] += dp[i - 1];
    }
  }
  return dp[x - 1];
};
