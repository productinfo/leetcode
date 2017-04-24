const minCostII = costs => {
  const yl = costs.length;
  if (!yl) return 0;
  const xl = costs[0].length;
  const t = costs[0].slice();
  for (let y = 1; y < yl; y++) {
    const copy = t.slice();
    for (let x = 0; x < xl; x++) {
      t[x] = costs[y][x] + Math.min(
        ...copy.slice(0, x),
        ...copy.slice(x + 1)
      );
    }
  }
  return Math.min(...t);
};

// 4/19/2017
var minCostII = function(costs) {
  const len = costs.length;
  if (!len) return 0;
  const t = costs[0].slice();
  for (let i = 1; i < len; i++) {
    const copy = t.slice();
    for (let j = 0; j < costs[i].length; j++) {
      t[j] = costs[i][j] + Math.min(
        ...copy.slice(0, j),
        ...copy.slice(j + 1)
      );
    }
  }
  return Math.min(...t);
};