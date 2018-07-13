const go = (a, b) => {
  if (a === 0) return [''];
  if (a === 1) return ['0', '1', '8'];
  const res = [];
  const rest = go(a - 2, b);
  for (const r of rest) {
    if (a !== b) {
      res.push(`0${r}0`);
    }
    res.push(`1${r}1`);
    res.push(`6${r}9`);
    res.push(`8${r}8`);
    res.push(`9${r}6`);
  }
  return res;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  return go(n, n);
};
