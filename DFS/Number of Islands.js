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

    var tmp = [];

    for (x = 0 ; x < xl ; x++) {

      tmp.push(false);

    }

    visited.push(tmp);

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