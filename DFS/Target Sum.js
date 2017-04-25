// recursion
// TIMEOUT
// O(2 ^ n)
const findTargetSumWays = (num, S) => {
  let total = 0;
  const go = (start, rem) => {
    if (start >= num.length) {
      if (rem === 0) total += 1;
      return;
    }
    go(start + 1, rem - num[start]);
    go(start + 1, rem + num[start]);
  };
  go(0, S);
  return total;
};

const findTargetSumWays = (nums, S) => {
  const len = nums.length;
  if (!len) return 0;
  let res = 0;
  const dfs = (index, sum) => {
    if (index === len) {
      if (sum === S) res += 1;
      return;
    }
    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum - nums[index]);
  };
  dfs(0, 0);
  return res;
};

// use DFS
// If the sum of all elements left is smaller than absolute value of target,
// there will be no answer following the current path. Thus we can return.
const findTargetSumWays = (nums, S) => {
  let total = 0;
  const len = nums.length;
	const sum = nums.slice();
	for (let i = len - 2; i >= 0; i--) {
		sum[i] += sum[i + 1];
	}
  if (!len) return total;
  const dfs = (pos, target) => {
		let res = 0
    if (pos === len) {
      if (target === S) res += 1;
      return res;
    }
		if (sum[pos] < Math.abs(S - target)) return 0;
    res += dfs(pos + 1, target + nums[pos]);
    res += dfs(pos + 1, target - nums[pos]);
		return res;
  };
  return dfs(0, 0);;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

// DP
const subsetSum = (arr, total) => {
  const dp = Array.from({ length: total + 1 }, (v, i) => i ? 0 : 1);
  for (const a of arr) {
    for (let i = total; i >= a; i--) {
      dp[i] += dp[i - a];
    }
  }
  return dp[total];
};

const findTargetSumWays = (num, S) => {
  const sum = num.reduce((t, n) => t + n, 0);
	if (sum < S) {
		return 0;
	} else {
		return (sum + S) % 2 === 0 ? subsetSum(num, (sum + S) >> 1) : 0;
	}
};