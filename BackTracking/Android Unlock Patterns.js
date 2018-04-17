var numberOfPatterns = function(m, n) {
  const visited = [];
  const skip = [];
  for (let i = 0; i < 10; i++) {
    skip.push([]);
  }
  skip[1][3] = 2;
  skip[3][1] = 2;
  skip[1][7] = 4;
  skip[7][1] = 4;
  skip[3][9] = 6;
  skip[9][3] = 6;
  skip[7][9] = 8;
  skip[9][7] = 8;
  skip[1][9] = 5;
  skip[9][1] = 5;
  skip[3][7] = 5;
  skip[7][3] = 5;
  skip[2][8] = 5;
  skip[8][2] = 5;
  skip[4][6] = 5;
  skip[6][4] = 5;
  let total = 0;

  const dfs = (pos, remain) => {
    if (remain === 0) return 1;
    let t = 0;
    visited[pos] = true;
    for (let i = 1; i <= 9; i++) {
      if (!visited[i] && (typeof skip[pos][i] !== 'number' || visited[skip[pos][i]])) {
        // valid point
        t += dfs(i, remain - 1);
      }
    }
    visited[pos] = false;
    return t;
  };

  for (let i = m; i <= n; i++) {
    total += dfs(1, i - 1) * 4; // corner
    total += dfs(2, i - 1) * 4; // mid
    total += dfs(5, i - 1); // center
  }
  return total;
};
