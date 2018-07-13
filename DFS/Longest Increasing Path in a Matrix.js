/**
 time out
 */
var longestIncreasingPath = function(matrix) {
  let max = 0;
  if (!matrix) return max;
  const yl = matrix.length;
  if (!yl) return max;
  const xl = matrix[0].length

  const dfs = (m, n, pv, now) => {
    if (
      m < 0 || n < 0 || m >= xl || n >= yl || matrix[n][m] <= pv
    ) return;
    max = Math.max(max, now);
    dfs(m + 1, n, matrix[n][m], now + 1);
    dfs(m - 1, n, matrix[n][m], now + 1);
    dfs(m, n + 1, matrix[n][m], now + 1);
    dfs(m, n - 1, matrix[n][m], now + 1);
  };

  // walk matrix and dfs each point
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      dfs(x, y, -Infinity, 1);
    }
  }

  return max;
};

var longestIncreasingPath = function(matrix) {
  let max = 0;
  if (!matrix) return max;
  const yl = matrix.length;
  if (!yl) return max;
  const xl = matrix[0].length

  const cache = [];

  for (let y = 0; y < yl; y++) {
    cache.push([]);
  }

  const dfs = (m, n, pv) => {
    if (
      m < 0 || n < 0 || m >= xl || n >= yl || matrix[n][m] <= pv
    ) return 0;
    if (cache[n][m]) return cache[n][m];
    const res = Math.max(
      dfs(m + 1, n, matrix[n][m]),
      dfs(m - 1, n, matrix[n][m]),
      dfs(m, n + 1, matrix[n][m]),
      dfs(m, n - 1, matrix[n][m])
    ) + 1;
    cache[n][m] = res;
    return res;
  };

  // walk matrix and dfs each point
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      max = Math.max(max, dfs(x, y, -Infinity));
    }
  }

  return max;
};

// -------------------------------------------

var longestIncreasingPath = function(matrix) {
  let max = 0;
  if (!matrix) return max;
  const yl = matrix.length;
  if (!yl) return max;
  const xl = matrix[0].length;

  const cache = [];

  for (let y = 0; y < yl; y++) {
    cache.push([]);
  }

  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];

  const dfs = (m, n, pv) => {
    if (
      m < 0 || n < 0 || m >= xl || n >= yl || matrix[n][m] <= pv
    ) return 0;
    if (cache[n][m]) return cache[n][m];
    const res = Math.max(
      ...opts.map(opt => dfs(m + opt.x, n + opt.y, matrix[n][m]))
    ) + 1;
    cache[n][m] = res;
    return res;
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      max = Math.max(max, dfs(x, y, -Infinity));
    }
  }

  return max;
};
