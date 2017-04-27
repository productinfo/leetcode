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