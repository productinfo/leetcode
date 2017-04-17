// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// var isMatch = function(s, p) {

//   var sl = s.length;
//   var pl = p.length;

//   var i = 0, j = 0, star = -1, mark = -1;

//   while (i < sl) {

//     if (j < pl && (p[j] === '?' || p[j] === s[i])) {

//       i++;
//       j++;

//     } else if (j < pl && p[j] === '*') {
//       star = j;
//       j++;
//       mark = i;
//     } else if (star !== -1) {

//       j = star + 1;
//       mark++;
//       i = mark;

//     } else {
//       return false;
//     }

//   }

//   while (j < pl && p[j] === '*') {
//     j++;
//   }

//   return j === pl;

// };


// DP
// O(mn)
const isMatch = (s, p) => {
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp.push([]);
  }
  dp[0][0] = true;
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 1];
    }
  }
  for (let y = 1; y <= s.length; y++) {
    for (let x = 1; x <= p.length; x++) {
      if (p[x - 1] === '*') {
        dp[y][x] = dp[y - 1][x] || dp[y][x - 1];
      } else if (p[x - 1] === '?' || s[y - 1] === p[x - 1]) {
        dp[y][x] = dp[y - 1][x - 1];
      }
    }
  }
  return !!dp[s.length][p.length];
};

// 4/15/2017
const isMatch = (s, p) => {
  const sl = s.length;
  const pl = p.length;
  const dp = [];
  for (let y = 0; y <= sl; y++) {
    dp.push([]);
  }
  dp[0][0] = true;
  for (let x = 1; x <= pl; x++) {
    if (p[x - 1] === '*') dp[0][x] = dp[0][x - 1];
  }
  for (let y = 1; y <= sl; y++) {
    for (let x = 1; x <= pl; x++) {
      if (s[y - 1] === p[x - 1] || p[x - 1] === '?') {
        // text are match or pattern is `?`
        dp[y][x] = dp[y - 1][x - 1];
      } else if (p[x - 1] === '*') {
        dp[y][x] = dp[y - 1][x] || dp[y][x - 1];
      }
    }
  }
  return !!dp[sl][pl];
};