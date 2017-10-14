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

// 4/15/2017
const minDistance = (w1, w2) => {
  const l1 = w1.length;
  const l2 = w2.length;
  const dp = [0];
  for (let i = 1; i <= l1; i++) {
    dp[i] = i;
  }
  for (let j = 1; j <= l2; j++) {
    let pre = dp[0];
    dp[0] = j;
    for (let i = 1; i <= l1; i++) {
      const tmp = dp[i];
      if (w1[i - 1] === w2[j - 1]) {
        dp[i] = pre;
      } else {
        dp[i] = Math.min(
          pre + 1,
          Math.min(
            dp[i] + 1,
            dp[i - 1] + 1
          )
        );
      }
      pre = tmp;
    }
  }
  return dp[l1];
};

const minDistance = (w1, w2) => {
  const l1 = w1.length;
  const l2 = w2.length;
  const dp = [];
  for (let y = 0; y <= l1; y++) {
    dp.push([]);
  }
  dp[0][0] = 0;
  for (let y = 1; y <= l1; y++) {
    dp[y][0] = y;
  }
  for (let x = 1; x <= l2; x++) {
    dp[0][x] = x;
  }
  for (let y = 1; y <= l1; y++) {
    for (let x = 1; x <= l2; x++) {
      if (w1[y - 1] === w2[x - 1]) {
        dp[y][x] = dp[y - 1][x - 1];
      } else {
        dp[y][x] = Math.min(
          dp[y - 1][x - 1] + 1,
          dp[y - 1][x] + 1,
          dp[y][x - 1] + 1
        );
      }
    }
  }
  return dp[l1][l2];
};