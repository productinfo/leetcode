/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

  if (s === undefined) {
    return 0;
  }

  var l = s.length;

  if (l === 0) {
    return 0;
  }

  var i;
  var dp = [1];
  dp[1] = s[0] === '0' ? 0 : 1;

  for (i = 2 ; i <= l ; i++) {
    dp[i] = 0;
  }

  for (i = 2 ; i <= l ; i++) {

    if (s[i - 1] !== '0') {
      dp[i] = dp[i - 1];
    }

    var twoD = parseInt(s[i - 2], 10) * 10 + parseInt(s[i - 1]);

    if (twoD >= 10 && twoD <= 26) {
      dp[i] += dp[i - 2];
    }

  }

  return dp[l];

};