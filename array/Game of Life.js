var gameOfLife = function(board) {
  if (!board) return;
  const yl = board.length;
  if (!yl) return;
  const xl = board[0].length;
  const copy = [];
  for (let y = 0; y < yl; y++) {
    copy.push([])
    for (let x = 0; x < xl; x++) {
      copy[y][x] = board[y][x];
    }
  }
  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 }
  ];
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      // calculate new value from copy
      let val = 0;
      for (const opt of opts) {
        const m = x + opt.x;
        const n = y + opt.y;
        if (
          m >= 0 && n >= 0 && m < xl && n < yl
        ) {
          val += copy[n][m];
        }
      }
      // update to old one
      if (board[y][x]) {
        // live
        if (val > 3 || val < 2) {
          board[y][x] = 0;
        } else {
          board[y][x] = 1;
        }
      } else {
        // dead
        if (val === 3) board[y][x] = 1;
      }
    }
  }
};

// 4/27/2018
var gameOfLife = function(board) {
  if (!board) return;
  const yl = board.length;
  if (!yl) return;
  const xl = board[0].length;

  const opts = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 }
  ];

  const read = cell => typeof cell === 'string' ? +cell.slice(0, 1) : cell;

  const get = (i, j) => {
    let live = 0;
    let dead = 0;
    for (const opt of opts) {
      const a = i + opt.x;
      const b = j + opt.y;
      if (a >= 0 && b >= 0 && a < xl && b < yl) {
        if (read(board[b][a])) {
          live++;
        } else {
          dead++;
        }
      }
    }
    if (read(board[j][i])) {
      if (live < 2) {
        return false;
      } else if (live > 3) {
        return false;
      } else {
        return true;
      }
    } else {
      return live === 3;
    }
  };
  
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      const next = get(x, y);
      board[y][x] = '' + board[y][x] + (next | 0);
    }
  }
  
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      board[y][x] = +board[y][x].slice(1);
    }
  }
};
