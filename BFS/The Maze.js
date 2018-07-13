/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  if (!maze) return false;
  const yl = maze.length;
  if (!yl) return false;
  const xl = maze[0].length;
  const q = [start];
  const opts = [
    { x: 0, y : 1 },
    { x: 0, y : -1 },
    { x: 1, y : 0 },
    { x: -1, y : 0 }
  ];
  const visited = [];
  for (let y = 0; y < yl; y++) visited.push([]);
  visited[start[0]][start[1]] = true;
  while (q.length) {
    const point = q.shift();
    for (const { x, y } of opts) {
      let [n, m] = point;
      while (m >= 0 && n >= 0 && m < xl && n < yl && maze[n][m] === 0) {
        m += x;
        n += y;
      }
      m -= x;
      n -= y;
      if (visited[n][m]) continue
      visited[n][m] = true;
      if (n === destination[0] && m === destination[1]) return true;
      q.push([n, m]);
    }
  }
  return false;
};

//

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  if (!maze) return false;
  const yl = maze.length;
  if (!yl) return false;
  const xl = maze[0].length;
  const q = [start];
  const opts = [
    { x: 0, y : 1 },
    { x: 0, y : -1 },
    { x: 1, y : 0 },
    { x: -1, y : 0 }
  ];
  const visited = [];
  for (let y = 0; y < yl; y++) visited.push([]);
  visited[start[0]][start[1]] = true;
  while (q.length) {
    const point = q.shift();
    for (const { x, y } of opts) {
      let [n, m] = point;
      while (m + x >= 0 && n + y >= 0 && m + x < xl && n + y < yl && maze[n + y][m + x] === 0) {
        m += x;
        n += y;
      }
      if (visited[n][m]) continue
      visited[n][m] = true;
      if (n === destination[0] && m === destination[1]) return true;
      q.push([n, m]);
    }
  }
  return false;
};
