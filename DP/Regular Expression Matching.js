// const isMatch = (s, p) => {
//   const dp = [];
//   for (let i = 0; i <= s.length; i++) {
//     dp.push([]);
//   }
//   dp[0][0] = true;
//   for (let i = 0; i < p.length; i++) {
//     if (p[i] === '*' && dp[0][i - 1]) {
//       dp[0][i + 1] = true;
//     }
//   }
//   for (let y = 0; y < s.length; y++) {
//     for (let x = 0; x < p.length; x++) {
//       if (p[x] === '.' || p[x] === s[y]) {
//         dp[y + 1][x + 1] = dp[y][x];
//       } else if (p[x] === '*') {
//         if (p[x - 1] !== s[y] && p[x - 1] !== '.') {
//           dp[y + 1][x + 1] = dp[y + 1][x - 1];
//         } else {
//           dp[y + 1][x + 1] = dp[y + 1][x] || dp[y][x + 1] || dp[y + 1][x - 1];
//         }
//       }
//     }
//   }
//   return !!dp[s.length][p.length];
// };

// const isMatch = (s, p) => {
//   const dp = [];
//   for (let i = 0; i <= s.length; i++) {
//     dp.push([]);
//   }
//   dp[0][0] = true;
//   for (let i = 1; i <= p.length; i++) {
//     if (p[i - 1] === '*') {
//       if (dp[0][i - 1] || (i > 1 && dp[0][i - 2])) {
//         dp[0][i] = true;
//       }
//     }
//   }

//   for (let y = 1; y <= s.length; y++) {
//     for (let x = 1; x <= p.length; x++) {
//       if (s[y - 1] === p[x - 1] || p[x - 1] === '.') {
//         dp[y][x] = dp[y - 1][x - 1];
//       } else if (p[x - 1] === '*') {
//         if (s[y - 1] !== p[x - 2] && p[x - 2] !== '.') {
//           dp[y][x] = dp[y][x - 2];
//         } else {
//           dp[y][x] = dp[y - 1][x] || dp[y][x - 1] || dp[y][x - 2];
//         }
//       }
//     }
//   }
//   return !!dp[s.length][p.length];
// }

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
      dp[0][i] = dp[0][i - 2];
    }
  }
  for (let y = 1; y <= s.length; y++) {
    for (let x = 1; x <= p.length; x++) {
      if (s[y - 1] === p[x - 1] || p[x - 1] === '.') {
        // text are the same or pattern is `.
        dp[y][x] = dp[y - 1][x - 1];
      } else if (p[x - 1] === '*') {
        // pattern is `.`
        // two scenario
        if (s[y - 1] !== p[x - 2] && p[x - 2] !== '.') {
          // `*` consider zero case
          dp[y][x] = dp[y][x - 2];
        } else {
          // `*` consider more case
          dp[y][x] = dp[y][x - 2] || dp[y - 1][x] || dp[y][x - 1];
        }
      }
    }
  }
  return !!dp[s.length][p.length];
}

// 3/4/2018
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sl = s.length;
  const pl = p.length;
  const dp = [];
  for (let y = 0; y <= sl; y++) {
    dp.push([]);
  }
  dp[0][0] = true;
  for (let x = 1; x <= pl; x++) {
    if (p[x - 1] === '*') dp[0][x] = dp[0][x - 2];
  }
  for (let y = 1; y <= sl; y++) {
    for (let x = 1; x <= pl; x++) {
      if (s[y - 1] === p[x - 1] || p[x - 1] === '.') {
        // use dignoal
        dp[y][x] = dp[y - 1][x - 1];
      } else if (p[x - 1] === '*') {
        dp[y][x] = dp[y][x - 2];
        if (p[x - 2] === '.' || p[x - 2] === s[y - 1]) {
          dp[y][x] = dp[y][x] || dp[y - 1][x];
        }
      }
    }
  }
  return !!dp[sl][pl];
};
