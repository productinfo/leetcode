/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

  if (!board || board.length === 0) {
    return;
  }

  sol(board);

};

var chars = '123456789'.split('');

var sol = function (board) {

  var yl = board.length;
  var xl = board[0].length;
  var lc = chars.length;
  var c;


  for (var j = 0 ; j < yl ; j++) {

    for (var i = 0 ; i < xl ; i++) {

      if (board[j][i] === '.') {

        for (var k = 0 ; k < lc ; k++) {

          c = chars[k];

          if (valid(board, i, j, c)) {

            board[j][i] = c;

            if (sol(board)) {
              return true;
            } else {
              board[j][i] = '.';
            }

          }

        }

        return false;
      }

    }

  }

  return true;

};

var valid = function (b, x, y, c) {

  var i, j;

  // check col
  for (i = 0 ; i < 9 ; i++) {
    if (b[i][x] === c) {
      return false;
    }
  }

  // check row
  for (i = 0 ; i < 9 ; i++) {
    if (b[y][i] === c) {
      return false;
    }
  }

  var yy = (y / 3) >> 0;
  var xx = (x / 3) >> 0;

  // check box
  for (j = yy * 3 ; j < yy * 3 + 3 ; j++) {

    for (i = xx * 3 ; i < xx * 3 + 3 ; i++) {

      if (b[y][x] === c) {
        return false;
      }

    }
    
  }

  return true;

};