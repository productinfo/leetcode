const shortestDistance = grid => {
  if (!grid) return 0;
  const yl = grid.length;
  if (!yl) return 0;
  const xl = grid[0].length;
  const distance = [];
  const nums = [];
  let totalBuilding = 0;
  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];
  for (let y = 0; y < yl; y++) {
    distance.push(Array.from(Array(xl), _ => 0));
    nums.push(Array.from(Array(xl), _ => 0));
  }
  let min = Infinity;
  const bfs = (a, b) => {
    const q = [{ x: a, y: b }];
    const visited = [];
    for (let y = 0; y < yl; y++) {
      visited.push([]);
    }
    let dist = 0;
    while (q.length) {
      const size = q.length;
      dist++;
      for (let k = 0; k < size; k++) {
        const node = q.shift();
        for (const opt of opts) {
          const m = node.x + opt.x;
          const n = node.y + opt.y;
          if (m >= 0 && n >= 0 && m < xl && n < yl && grid[n][m] === 0 && !visited[n][m]) {
            visited[n][m] = true;
            distance[n][m] += dist;
            nums[n][m]++;
            q.push({ x: m, y: n });
          }
        }
      }
    }
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === 1) {
        totalBuilding++;
        bfs(x, y);
      }
    }
  }
  // console.log(distance);
  // console.log(nums);
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === 0 && nums[y][x] === totalBuilding) {
        min = Math.min(min, distance[y][x]);
      }
    }
  }
  return min === Infinity ? -1 : min;
};
