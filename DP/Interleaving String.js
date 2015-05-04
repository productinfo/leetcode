/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

  var l1 = s1.length;
  var l2 = s2.length;
  var l3 = s3.length;

  if (l1 + l2 !== l3) {
    return false;
  }

  var dp = [], i, j;

  for (i = 0 ; i <= l2 ; i++) {

    dp.push([]);

  }

  dp[0][0] = true;

  for (i = 0 ; i < l1 ; i++) {

    if (s3[i] === s1[i]) {
      dp[0][i + 1] = true;
    } else {
      break;
    }

  }

  for (i = 0 ; i < l2 ; i++) {
    if (s3[i] === s2[i]) {
      dp[i + 1][0] = true;
    } else {
      break;
    }
  }

  // var c1, c2, c3, i3;

  for (i = 1 ; i <= l2 ; i++) {

    for (j = 1 ; j <= l1 ; j++) {

      dp[i][j] = (dp[i][j - 1] && s1[j - 1] === s3[i + j - 1]) || (dp[i - 1][j] && s2[i] === s3[i + j - 1]);

    }
  }


  return dp[l2][l1];
};