// O(4 ^ n)
// +, -, * or empty so it is 4
const addOperators = (num, target) => {
  const res = [];
  const len = num.length;
  const dfs = (pos, curSum, preSum, exp) => {
    if (pos === len && curSum === target) {
      res.push(exp);
      return;
    }
    for (let i = pos; i < len; i++) {
      const subs = num.substring(pos, i + 1);
      const val = +subs;
      if (exp.length) {
        dfs(i + 1, curSum + val, curSum, exp + '+' + subs);
        dfs(i + 1, curSum - val, curSum, exp + '-' + subs);
        dfs(i + 1, (curSum - preSum) * val + preSum, preSum, exp + '*' + subs);
      } else {
        dfs(i + 1, curSum + val, curSum, subs);
      }
      if (num[pos] === '0') return;
    }
  };
  dfs(0, 0, 0, '');
  return res;
};

// 4/15/2017
// 123
// 1 + 2
// pv = 1
// cur = 3
// 1 + 2 * 3;
const addOperators = (num, target) => {
  const res = [];
  const len = num.length;
  const dfs = (pos, curSum, pvSum, subs) => {
    // base case
    if (pos === len && curSum === target) {
      res.push(subs);
      return;
    }
    for (let i = pos; i < len; i++) {
      // 1
      // 12
      // 123
      const str = num.substring(pos, i + 1);
      const val = +str;
      if (subs.length) {
        // need to add operator
        dfs(i + 1, curSum + val, curSum, `${subs}+${str}`);
        dfs(i + 1, curSum - val, curSum, `${subs}-${str}`);
        dfs(i + 1, (curSum - pvSum) * val + pvSum, pvSum, `${subs}*${str}`);
      } else {
        // first one, no operator required
        dfs(i + 1, curSum + val, curSum, str);
      }
      if (num[pos] === '0') return;
    }
  };
  dfs(0, 0, 0, '');
  return res;
};