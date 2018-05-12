// HEAP~

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  let res = 0;
  if (!heightMap) return res;
  const yl = heightMap.length;
  if (!yl) return res;
  const xl = heightMap[0].length;
  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];
  
  const visited = [];

  for (let y = 0; y < yl; y++) {
    visited.push([]);
  }

  const heap = [];

  // left & right
  for (let y = 0; y < yl; y++) {
    visited[y][0] = true;
    visited[y][xl - 1] = true;
    heap.push({
      x: 0,
      y,
      h: heightMap[y][0]
    });
    heap.push({
      x: xl - 1,
      y,
      h: heightMap[y][xl - 1]
    });
  }

  for (let x = 0; x < xl; x++) {
    visited[0][x] = true;
    visited[yl - 1][x] = true;
    heap.push({
      x,
      y: 0,
      h: heightMap[0][x]
    });
    heap.push({
      x,
      y: yl - 1,
      h: heightMap[yl - 1][x]
    });
  }
  const s = (a, b) => a.h - b.h;
  heap.sort(s);
  while (heap.length) {
    const point = heap.shift();
    for (const opt of opts) {
      const m = opt.x + point.x;
      const n = opt.y + point.y;
      if (m >= 0 && n >= 0 && m < xl && n < yl && !visited[n][m]) {
        visited[n][m] = true;
        res += Math.max(0, point.h - heightMap[n][m]);
        heap.push({ x: m, y: n, h: Math.max(point.h, heightMap[n][m]) });
        heap.sort(s);
      }
    }
  }
  return res;
};
