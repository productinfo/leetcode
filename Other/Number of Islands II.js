/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  // m is y
  // n is x
  const res = [];
  if (m === 0 && n === 0) return res;
  const grid = [];
  for (let y = 0; y < m; y++) {
    grid.push(Array.from(Array(n), _ => 0));
  }
  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];
  const valid = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m) {
      return false;
    }
    return true;
  };
  for (let k = 0; k < positions.length; k++) {
    const pv = k === 0 ? 0 : res[k - 1];
    const pos = positions[k];
    const [b, a] = pos
    grid[b][a] = 1;
    if (opts.some(({ x, y }) => {
      const i = x + a;
      const j = y + b;
      return valid(i, j) && grid[j][i] === 1
    })) {
      // total not change
      res.push(pv);
    } else {
      // increase 1 island
      res.push(pv + 1);
    }
  }
  return res;
};

// console.log(numIslands2(3, 3, [
//   [0,0], [0,1], [1,2], [2,1]
// ]));

console.log(numIslands2(2, 2, [
  [0,0], [1, 1], [0,1]
]));
