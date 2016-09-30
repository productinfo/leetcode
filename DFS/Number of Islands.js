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
