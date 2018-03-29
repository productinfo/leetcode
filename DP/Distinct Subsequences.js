/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {

  var sl = s.length, tl = t.length;

  var dp = [];

  var y, x, tmp;

  for (y = 0 ; y <= tl ; y++) {

    tmp = [];

    for (x = 0 ; x <= sl ; x++) {
      tmp.push(0);
    }

    dp.push(tmp);

  }

  dp[0][0] = 1;

  for (x = 1 ; x <= sl ; x++) {
    dp[0][x] = 1;
  }

  for (y = 1 ; y <= tl ; y++) {
    dp[y][0] = 0;
  }

  for (y = 1 ; y <= tl ; y++) {

    for (x = 1 ; x <= sl ; x++) {

      dp[y][x] = dp[y][x - 1];

      if (s[x - 1] === t[y - 1]) {
        dp[y][x] += dp[y - 1][x - 1];
      }

    }

  }

  return dp[tl][sl];
};


// 3/28/2018
var numDistinct = function(s, t) {
  const sl = s.length;
  const tl = t.length;
  const dp = [Array.from({ length: tl + 1 }, _ => 0)];
  for (let y = 1; y <= sl; y++) {
    dp.push([1]);
  }
  dp[0][0] = 1;
  for (let y = 1; y <= sl; y++) {
    for (let x = 1; x <= tl; x++) {
      dp[y][x] = dp[y - 1][x];
      if (s[y - 1] === t[x - 1]) dp[y][x] += dp[y - 1][x - 1];
    }
  }
  return dp[sl][tl];
};
