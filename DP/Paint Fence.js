var numWays = function(n, k) {
  if (n === 0) return 0;
  if (n === 1) return k;
  let same = 0;
  let diff = k;
  let total = k;
  for (let i = 2; i <= n; i++) {
    same = diff;
    diff = (k - 1) * total;
    total = same + diff;
  }
  return total;
};
