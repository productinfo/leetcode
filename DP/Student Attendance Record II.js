// timeout
var checkRecord = function(n) {
  let res = 0;
  if (n < 1) return res;
  const g = ['P', 'A', 'L'];
  let tmp = '';
  let As = 0;
  const dfs = () => {
    if (tmp.length === n) {
      res++;
      return;
    }
    for (const ch of g) {
      // check L
      if (tmp.length > 1 && ch === 'L' && tmp[tmp.length - 1] === 'L' && tmp[tmp.length - 2] === 'L') continue;
      // check A
      if (As > 0 && ch === 'A') continue;
      if (ch === 'A') As++;
      // put ch
      tmp += ch;
      // dfs
      dfs();
      // pop ch
      tmp = tmp.slice(0, tmp.length - 1);
      // reset As
      if (ch === 'A') As--;
    }
  }
  dfs();
  return res;
};

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const f = [1, 2, 4, 7];
  for (let i = 4; i <= n; i++) {
    f[i] = 2 * (f[i - 1]) - (f[i - 4]);
  }
  let sum = f[n];
  for (let i = 1; i <= n; i++) {
    sum += f[i - 1] * f[n - i];
  }
  return sum;
};
