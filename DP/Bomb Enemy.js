/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!grid || !grid.length) return 0;
  const yl = grid.length;
  if (!yl) return 0;
  const xl = grid[0].length;
  let max = 0;
  const vup = (i, j) => {
    let t = 0;
    for (let y = j; y >= 0; y--) {
      if (y < 0 || grid[y][i] === 'W') break;
      if (grid[y][i] === 'E') t++;
    }
    return t;
  };
  const vdown = (i, j) => {
    let t = 0;
    for (let y = j; y < yl; y++) {
      if (y >= yl || grid[y][i] === 'W') break;
      if (grid[y][i] === 'E') t++;
    }
    return t;
  };
  const hright = (i, j) => {
    let t = 0;
    for (let x = i; x < xl; x++) {
      if (x >= xl || grid[j][x] === 'W') break;
      if (grid[j][x] === 'E') t++;
    }
    return t;
  };
  const hleft = (i, j) => {
    let t = 0;
    for (let x = i; x >= 0; x--) {
      if (x < 0 || grid[j][x] === 'W') break;
      if (grid[j][x] === 'E') t++;
    }
    return t;
  };
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === '0') {
        max = Math.max(
          max,
          vup(x, y - 1, 1) + vdown(x, y + 1, -1) + hleft(x, y, 1) + hright(x, y, -1)
        );
      }
    }
  }
  return max;
};

var maxKilledEnemies = function(grid) {
  if (!grid || !grid.length) return 0;
  const yl = grid.length;
  if (!yl) return 0;
  const xl = grid[0].length;
  let max = 0;
  let xxx = 0;
  let yyy = Array.from(Array(xl), _ => 0);
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (x === 0 || grid[y][x - 1] === 'W') {
        xxx = 0;
        for (let k = x; k < xl && grid[y][k] !== 'W'; k++) {
          xxx += grid[y][k] === 'E' ? 1 : 0;
        }
      }
      if (y === 0 || grid[y - 1][x] === 'W') {
        yyy[x] = 0;
        for (let k = y; k < yl && grid[k][x] !== 'W'; k++) {
          yyy[x] += grid[k][x] === 'E' ? 1 : 0;
        }
      }
      if (grid[y][x] === '0') {
        max = Math.max(max, xxx + yyy[x]);
      }
    }
  }
  return max;
};

// 4/26/2018
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  let max = 0;
  if (!grid) return max;
  const yl = grid.length;
  if (!yl) return max;
  const xl = grid[0].length;

  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
  ];

  const get = (i, j) => {
    let t = 0;
    for (const opt of opts) {
      let cur = 0;
      let a = i + opt.x;
      let b = j + opt.y;
      while (a >= 0 && b >= 0 && a < xl && b < yl && grid[b][a] !== 'W') {
        if (grid[b][a] === 'E') cur++;
        a += opt.x;
        b += opt.y;
      }
      t += cur
    }
    return t;
  };

  const xz = Array(xl).fill(0);
  let t = 0;
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (x === 0) {
        t = 0;
        console.log(grid[y][x]);
        for (let k = x; k < xl && grid[y][k] !== 'W'; k++) {
          t += grid[y][k] === 'E' ? 1 : 0;
        }
        console.log(t);
      }

      // grid[y - 1][x] === 'W'
      if (y === 0) {
        for (let k = y; k < yl && grid[k][x] !== 'W'; k++) {
          xz[x] += grid[k][x] === 'E' ? 1 : 0;
        }
      }

      if (grid[y][x] === '0') {
        max = Math.max(max, t + xz[x]);
      }
    }
  }
  // console.log(xz);
  console.log('z');
  return max;
};
console.log(maxKilledEnemies([
  ['0', 'E', '0', '0'],
  ['E', '0', 'W', 'E'],
  ['0', 'E', '0', '0']
]));
