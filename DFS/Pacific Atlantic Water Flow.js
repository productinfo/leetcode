var pacificAtlantic = function(matrix) {
  const res = [];
  if (!matrix) return res;
  const yl = matrix.length;
  if (!yl) return res;
  const xl = matrix[0].length;
  
  const dfs = (m, n, pv, visited) => {
    let tl = false;
    let rb = false;
    if (
      m < 0 || n < 0 || m >= xl || n >= yl || matrix[n][m] > pv || visited[n][m]
    ) return { tl, rb };
    
    visited[n][m] = true;

    if (m === 0 || n === 0) tl = true;
    if (m === xl - 1 || n === yl - 1) rb = true;

    const a = dfs(m + 1, n, matrix[n][m], visited);
    const b = dfs(m - 1, n, matrix[n][m], visited);
    const c = dfs(m, n + 1, matrix[n][m], visited);
    const d = dfs(m, n - 1, matrix[n][m], visited);

    return {
      tl: [a.tl, b.tl, c.tl, d.tl, tl].some(k => k),
      rb: [a.rb, b.rb, c.rb, d.rb, rb].some(k => k)
    };
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      const visited = [];
      for (let y = 0; y < yl; y++) visited.push([]);
      const { tl, rb } = dfs(x, y, Infinity, visited);
      if (tl && rb) res.push([y, x]);
    }
  }

  return res;
};

/**
time out
 */
var pacificAtlantic = function(matrix) {
  const res = [];
  if (!matrix) return res;
  const yl = matrix.length;
  if (!yl) return res;
  const xl = matrix[0].length;

  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];
  
  const dfs = (m, n, pv, visited) => {
    let tl = false;
    let rb = false;
    if (
      m < 0 || n < 0 || m >= xl || n >= yl || matrix[n][m] > pv || visited[n][m]
    ) return { tl, rb };
    
    visited[n][m] = true;

    if (m === 0 || n === 0) tl = true;
    if (m === xl - 1 || n === yl - 1) rb = true;

    for (const opt of opts) {
      const u = m + opt.x;
      const v = n + opt.y;
      const res = dfs(u, v, matrix[n][m], visited);
      if (res.tl) tl = true;
      if (res.rb) rb = true;
    }

    return { tl, rb };
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      const visited = [];
      for (let y = 0; y < yl; y++) visited.push([]);
      const { tl, rb } = dfs(x, y, Infinity, visited);
      if (tl && rb) res.push([y, x]);
    }
  }

  return res;
};
