var findDiagonalOrder = function(matrix) {
  let res = [];
  if (!matrix) return res;
  const yl = matrix.length;
  if (!yl) return res;
  const xl = matrix[0].length;

  let y = 0;
  while (y < yl) {
    let x = 0;
    let t = y;
    const tmp = [];
    while (x < xl && t >= 0) {
      if (y % 2 === 0) {
        tmp.push(matrix[t][x]);
      } else {
        tmp.unshift(matrix[t][x]);
      }
      x++;
      t--;
    }
    res = res.concat(tmp);
    y++;
  }
  let x = 1;
  while (x < xl) {
    let y = yl - 1;
    let t = x;
    const tmp = [];
    while (t < xl && y >= 0) {
      if (yl % 2 === 0) {
        if (x % 2 === 1) {
          tmp.push(matrix[y][t]);
        } else {
          tmp.unshift(matrix[y][t]);
        }
      } else {
        if (x % 2 === 0) {
          tmp.push(matrix[y][t]);
        } else {
          tmp.unshift(matrix[y][t]);
        }
      }
      t++;
      y--;
    }
    res = res.concat(tmp);
    x++;
  }
  return res;
};

// 

var findDiagonalOrder = function(matrix) {
  let res = [];
  if (!matrix) return res;
  const yl = matrix.length;
  if (!yl) return res;
  const xl = matrix[0].length;
  let x = 0;
  let y = 0;
  let d = 1;
  for (let i = 0; i < xl * yl; i++) {
    res.push(matrix[y][x]);
    x += d;
    y -= d;
    if (x >= xl) {
      x = xl - 1;
      y += 2;
      d = -d;
    }
    if (y >= yl) {
      x += 2;
      y = yl - 1;
      d = -d;
    }
    if (x < 0) {
      x = 0;
      d = -d;
    }
    if (y < 0) {
      y = 0;
      d = -d;
    }
  }
  return res;
};
