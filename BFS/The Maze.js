var hasPath = function(maze, start, destination) {
  if (!maze) return false;
  const yl = maze.length;
  if (!yl) return false;
  const xl = maze[0].length;
  const visited = [];
  for (let y = 0; y < yl; y++) visited.push([]);
  visited[start[0]][start[1]] = true;
  const q = [{
    x: start[1],
    y: start[0]
  }];
  const opts = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 }
  ];
  while (q.length) {
    const point = q.shift();
    for (const opt of opts) {
      let m = point.x;
      let n = point.y;
      while (m >= 0 && n >= 0 && m < xl && n < yl && maze[n][m] === 0) {
        m += opt.x;
        n += opt.y;
      }
      m -= opt.x;
      n -= opt.y;
      if (visited[n][m]) continue;
      visited[n][m] = true;
      if (m === destination[1] && n === destination[0]) return true;
      q.push({ x: m, y: n });
    }
  }
  return false;
};
