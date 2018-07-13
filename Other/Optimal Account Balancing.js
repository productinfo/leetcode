var minTransfers = function(transactions) {
  const map = {};
  for (const [user1, user2, money] of transactions) {
    const v1 = map[user1] || 0;
    const v2 = map[user2] || 0;
    map[user1] = v1 - money;
    map[user2] = v2 + money;
  }
  const debts = Object.keys(map).reduce((acc, u) => {
    acc.push(map[u]);
    return acc;
  }, []);
  const dfs = (pos, count) => {
    while (pos < debts.length && debts[pos] === 0) pos++;
    if (pos >= debts.length) {
      return count;
    }
    let res = Infinity;
    for (let i = pos + 1; i < debts.length; i++) {
      if (debts[pos] * debts[i] < 0) {
        debts[i] += debts[pos];
        res = Math.min(
          res,
          dfs(pos + 1, count + 1)
        );
        debts[i] -= debts[pos];
      }
    }
    return res;
  };
  return dfs(0, 0);
};
