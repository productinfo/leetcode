/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

  var l1 = word1.length, l2 = word2.length;

  if (l1 < 0 || l2 < 0) {
    return 0;
  }

  var dp = [];

  var i, j;

  // create two dimension array
  for (i = 0 ; i <= l1 ; i++) {

    var tmp = [];

    for (j = 0 ; j <= l2 ; j++) {

      tmp.push(0);

    }

    dp.push(tmp);

  }

  for (i = 0 ; i <= l1 ; i++) {
    dp[i][0] = i;
  }

  for (j = 0 ; j <= l2 ; j++) {
    dp[0][j] = j;
  }

  var c1, c2, insert, del, replace, min;

  for (i = 0 ; i < l1 ; i++) {
    
    c1 = word1[i];

    for (j = 0 ; j < l2 ; j++) {
      c2 = word2[j];

      if (c1 === c2) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {

        del = dp[i + 1][j] + 1;
        insert = dp[i][j + 1] + 1;
        replace = dp[i][j] + 1;

        // get min of these three
        min = Math.min(replace, insert);
        min = Math.min(min, del);

        dp[i + 1][j + 1] = min;
      }
    }
  }

  return dp[l1][l2];

};