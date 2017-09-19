/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  var yl = board.length, xl = board[0].length;

  if (!board || yl !== 9 || xl !== 9) {
    return false;
  }

  var x, y, yChecker = [], xChecker = [], boxChecker = [];

  var nArea;

  for (x = 0 ; x < 9 ; x++) {
    yChecker[x] = [];
    xChecker[x] = [];
    boxChecker[x] = [];
  }

  for (y = 0 ; y < 9 ; y++) {

    for (x = 0 ; x < 9 ; x++) {

      if (board[y][x] !== '.') {

        nArea = (y / 3) >> 0 * 3 + (x / 3) >> 0;

        if (
          yChecker[y].indexOf(board[y][x]) !== -1
          || xChecker[x].indexOf(board[y][x]) !== -1
          || boxChecker[nArea].indexOf(board[y][x]) !== -1
          ) {
          return false;
        }

        yChecker[y].push(board[y][x]);
        xChecker[x].push(board[y][x]);
        boxChecker[nArea].push(board[y][x]);

      }

    }

  }

  return true;
};

// 10/25/2016
const isValidSudoku = board => {
  for (let y = 0; y < 9; y++) {
    const check = [];
    for (let x = 0; x < 9; x++) {
      if (board[y][x] !== '.') {
        const val = +board[y][x];
        if (check[val]) return false;
        check[val] = true;
      }
    }
  }
  for (let x = 0; x < 9; x++) {
    const check = [];
    for (let y = 0; y < 9; y++) {
      if (board[y][x] !== '.') {
        const val = +board[y][x];
        if (check[val]) return false;
        check[val] = true;
      }
    }
  }
  for (let block = 0; block < 9; block++) {
    const check = [];
    for (let y = block * 3; y < block * 3 + 3; y++) {
      for (let x = block / 3; x < block / 3 + 3; x++) {
        if (board[y][x] !== '.') {
          const val = +board[y][x];
          if (check[val]) return false;
          check[val] = true;
        }
      }
    }
  }
};

// 4/16/2017
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const yl = board.length;
  const xl = board[0].length;
  const u1 = [];
  const u2 = [];
  const u3 = [];
  for (let y = 0; y < yl; y++) {
    u1.push([]);
    u2.push([]);
    u3.push([]);
  }
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (board[y][x] != '.') {
        const nb = +board[y][x];
        const k = ((y / 3) >> 0) * 3 + ((x / 3) >> 0)
        if (u1[y][nb] || u2[x][nb] || u3[k][nb]) return false;
        u1[y][nb] = true;
        u2[x][nb] = true;
        u3[k][nb] = true;
      }
    }
  }
  return true;
};