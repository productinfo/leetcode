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