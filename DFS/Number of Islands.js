/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  if (!grid) {
    return 0;
  }

  var yl = grid.length;

  if (yl === 0) {
      return 0;
  }

  var xl = grid[0].length;

  var y, x;

  var visited = [];

  for (y = 0 ; y < yl ; y++) {
    visited.push([]);
  }

  var count = 0;

  var dfs = function (x, y) {

    if (x < 0 ||
        y < 0 ||
        x >= xl ||
        y >= yl ||
        visited[y][x] ||
        grid[y][x] !== '1'
      ) {
      return;
    }

    visited[y][x] = true;

    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x, y- 1);
    dfs(x - 1, y);
  };

  for (y = 0 ; y < yl ; y++) {
    for (x = 0 ; x < xl ; x++) {

      if (grid[y][x] === '1' && !visited[y][x]) {
        dfs(x, y);
        count++;
      }

    }
  }


  return count;

};

// 9/25/2016
var numIslands = function(grid) {
  if (!grid) return 0;
  const yl = grid.length;
  if (!yl) return 0;
  const xl = grid[0].length;
  const visited = [];
  let counter = 0;
  for (let y = 0; y < yl; y++) {
    visited.push([]);
  }
  const go = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= xl ||
      y >= yl ||
      visited[y][x] ||
      grid[y][x] !== '1'
    ) {
      return false;
    }

    visited[y][x] = true;
    go(x + 1, y);
    go(x - 1, y);
    go(x, y + 1);
    go(x, y - 1);
    return true;
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (go(x, y)) counter++;
    }
  }
  return counter;
};

// 11/30/2016
const numIslands = grid => {
  const yl = grid.length;
  if (!yl) return 0;
  const xl = grid[0].length;
  let c = 0;
  const dfs = (x, y) => {
    if (
      x < 0 || y < 0 ||
      x >= xl || y >= yl ||
      grid[y][x] === '0'
    ) {
      return false;
    }
    grid[y][x] = '0'
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    return true;
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (dfs(x, y)) c++;
    }
  }
  return c;
};

// O(ROW x COL)
// 4/17/2017
var numIslands = function(grid) {
  let total = 0;
  const yl = grid.length;
  if (!yl) return total;
  const xl = grid[0].length;
  const dfs = (x, y) => {
    if (
      x < 0 || y < 0 ||
      x >= xl || y >= yl ||
      grid[y][x] !== '1'
    ) {
      return;
    }
    grid[y][x] = '0';
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === '1') {
        dfs(x, y);
        total += 1;
      }
    }
  }
  return total;
};

// 5/10/2017
var numIslands = function(grid) {
  let t = 0;
  const yl = grid.length;
  if (!yl) return t;
  const xl = grid[0].length;
  const dfs = (x, y) => {
    if (
      x < 0 || y < 0 ||
      x >= xl || y >= yl ||
      grid[y][x] !== '1'
    ) return;
    grid[y][x] = '0';

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === '1') {
        dfs(x, y);
        t++;
      }
    }
  }
  return t;
};

// 4/28/2018
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let total = 0;
  if (!grid) return total;
  const yl = grid.length;
  if (!yl) return total;
  const xl = grid[0].length;

  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= xl || j >= yl || grid[j][i] !== '1') return;
    grid[j][i] = '0';
    for (const opt of opts) {
      dfs(i + opt.x, j + opt.y);
    }
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === '1') {
        dfs(x, y);
        total++;
      }
    }
  }
  return total;
};

