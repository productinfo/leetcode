var shortestDistance = function(maze, start, destination) {
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
  const dist = [];
  for (let y = 0; y < yl; y++) dist.push(Array(xl).fill(Infinity));
  dist[start[0]][start[1]] = 0;
  while (q.length) {
    const point = q.shift();
    for (const { x, y } of opts) {
      let [n, m] = point;
      let cur = 0;
      while (m + x >= 0 && n + y >= 0 && m + x < xl && n + y < yl && maze[n + y][m + x] === 0) {
        m += x;
        n += y;
        cur++;
      }
      if (dist[point[0]][point[1]] + cur < dist[n][m]) {
        dist[n][m] = dist[point[0]][point[1]] + cur;
        q.push([n, m]);
      }
    }
  }
  return dist[destination[0]][destination[1]] === Infinity ? -1 : dist[destination[0]][destination[1]];
};
