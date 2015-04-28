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

        nArea = Math.floor(y / 3) * 3 + Math.floor(x / 3);

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