var islandPerimeter = function(grid) {
  let total = 0;
  if (!grid) return total;
  const yl = grid.length;
  if (!yl) return total;
  const xl = grid[0].length;

  const opts = [
    { x: 0, y : 1 },
    { x: 0, y : -1 },
    { x: 1, y : 0 },
    { x: -1, y : 0 }
  ];

  const check = (m, n) => {
    let p = 4;
    opts.forEach(opt => {
      const a = m + opt.x;
      const b = n + opt.y;
      if (a >= 0 && b >= 0 && a < xl && b < yl && grid[b][a] === 1) {
        p--;
      }
    })
    return p;
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === 1) {
        total += check(x, y);
      }
    }
  }

  return total;
};
