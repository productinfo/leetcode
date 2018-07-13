/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  var yl = board.length;
  var xl = board[0].length;

  if (!board || yl < 0 || xl < 0) {
    return false;
  }

  var visited = [];

  var i, j, tmp;

  for (i = 0 ; i < yl ; i++) {
    visited.push([]);
  }

  var go = function (y, x, index) {

    if (word.length === index) {
      return true;
    }

    if (y < 0
      || x < 0
      || y >= yl
      || x >= xl
      || visited[y][x]
      || board[y][x] !== word[index]
      ) {
      return false;
    }

    visited[y][x] = true;

    if (go(y + 1, x, index + 1) // go up
      || go(y - 1, x, index + 1) // go down
      || go(y, x - 1, index + 1) // go left
      || go(y, x + 1, index + 1) // go right
      ) {
      return true;
    }

    visited[y][x] = false;

    return false;

  };

  for (i = 0 ; i < yl ; i++) {
    for (j = 0 ; j < xl ; j++) {

      if (go(i, j, 0)) {
        return true;
      }

    }
  }

  return false;

};

// 9/23/2016
// DFS
// O(mn*4^k)
var exist = function(board, word) {
  const yl = board.length;
  const xl = board[0].length;
  const len = word.length;

  const visited = [];
  for (let y = 0; y < yl; y++) {
    visited.push([]);
  }

  const go = (x, y, index) => {

    if (index === len) return true;

    if (
      x >= xl || y >= yl ||
      x < 0 || y < 0 ||
      visited[y][x] ||
      word[index] !== board[y][x]
    ) {
      return false;
    }

    visited[y][x] = true;

    if (
      go(x + 1, y, index + 1) ||
      go(x - 1, y, index + 1) ||
      go(x, y + 1, index + 1) ||
      go(x, y - 1, index + 1)
    ) {
      return true;
    }

    visited[y][x] = false;

    return false;
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (go(x, y, 0)) return true;
    }
  }

  return false;
};

// 3/23/2018
// DFS
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board) return false;
  const yl = board.length;
  if (!yl) return false;
  const xl = board[0].length;
  const opts = [
    { m: 1, n: 0 },
    { m: -1, n: 0 },
    { m: 0, n: 1 },
    { m: 0, n: -1 }
  ];

  const dfs = (m, n, str) => {
    if (!str.length) return true;
    for (const opt of opts) {
      const x = m + opt.m;
      const y = n + opt.n;
      if (x >= 0 && x < xl && y >= 0 && y < yl && board[y][x] === str[0]) {
        board[y][x] = ' ';
        if (dfs(x, y, str.slice(1))) return true;
        board[y][x] = str[0];
      }
    }
    return false;
  };
  
  const ch = word[0];
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (board[y][x] === ch) {
        board[y][x] = ' ';
        if (dfs(x, y, word.slice(1))) return true;
        board[y][x] = ch;
      }
    }
  }
  return false;
};

// 6/3/2018
var exist = function(board, word) {
  if (!board) return false;
  const yl = board.length;
  if (!yl) return false;
  const xl = board[0].length;
  const len = word.length;
  const opts = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 }
  ];

  const dfs = (i, j, index) => {
    if (index === len) return true;
    if (
      i < 0 || j < 0 || i >= xl || j >= yl || board[j][i] !== word[index]
    ) return false;
    const ch = board[j][i];
    board[j][i] = '';
    const found = opts.some(({ x, y }) => dfs(x + i, y + j, index + 1));
    board[j][i] = ch;
    return found;
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (dfs(x, y, 0)) return true;
    }
  }
  return false;
};

