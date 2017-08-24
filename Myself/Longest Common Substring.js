const x = (s1, s2) => {
  const l1 = s1.length;
  const l2 = s2.length;
  const dp = [];
  for (let y = 0; y <= l2; y++) {
    if (y) {
      dp.push([]);
    } else {
      dp.push(Array.from({ length: l1 + 1 }, v => 0));
    }
  }
  let max = 0;
  for (let y = 1; y <= l2; y++) {
    for (let x = 1; x <= l1; x++) {
      if (s1[x - 1] === s2[y - 1]) {
        dp[y][x] = +dp[y - 1][x - 1] + 1
        max = Math.max(max, dp[y][x]);
      } else {
        dp[y][x] = 0;
      }
    }
  }
  return max;
};

const y = (s1, s2, k) => {
  const l1 = s1.length;
  const l2 = s2.length;
  const dp = [];
  for (let y = 0; y <= l2; y++) {
    if (y) {
      dp.push([]);
    } else {
      dp.push(Array.from({ length: l1 + 1 }, v => 0));
    }
  }
  let max = 0;
  for (let y = 1; y <= l2; y++) {
    for (let x = 1; x <= l1; x++) {
      if (s1[x - 1] === s2[y - 1]) {
        dp[y][x] = +dp[y - 1][x - 1] + 1
        if (dp[y][x] >= k) return true
      } else {
        dp[y][x] = 0;
      }
    }
  }
  return false;
};

console.log(x('abcdaf', 'zbcdf'));

// 5/30/2017
const x = (s1, s2) => {
  const dp = [];
  const l1 = s1.length;
  const l2 = s2.length;
  let max = 0;
  let maxString = '';
  const get = (x, y) => {
    if (dp[y][x] === 0) return;
    maxString = s1[x] + maxString;
    get(x - 1, y - 1);
  };
  for (let y = 0; y <= l2; y++) {
    dp.push(Array(l1 + 1).fill(0));
  }
  dp[0][0] += 1;
  for (let y = 1; y <= l2; y++) {
    for (let x = 1; x <= l1; x++) {
      if (s2[y - 1] === s1[x - 1]) {
        dp[y][x] = dp[y - 1][x - 1] + 1;
        if (dp[y][x] > max) {
          max = dp[y][x];
          maxString += s1[x - 1];
        }
      }
    }
  }
  return maxString;
};
console.log(x('abcdaf', 'zbcdf'));