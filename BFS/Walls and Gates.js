// BFS
const wallsAndGates = rooms => {
  const yl = rooms.length;
  if (!yl) return;
  const xl = rooms[0].length;
  const q = [];
  const opt = [{
    x: 0,
    y: 1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: 0
  }, {
    x: -1,
    y: 0
  }];
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      // queue the gate
      if (rooms[y][x] === 0) q.push({ x, y });
    }
  }
  while (q.length) {
    const { x, y } = q.shift();
    for (let k = 0; k < opt.length; k++) {
      const i = x + opt[k].x;
      const j = y + opt[k].y;
      if (
        i < 0 || j < 0 ||
        i >= xl || j >= yl ||
        rooms[j][i] < rooms[y][x] + 1
      ) {
        continue;
      }
      rooms[j][i] = rooms[y][x] + 1;
      q.push({ x: i, y: j });
    }
  }
};