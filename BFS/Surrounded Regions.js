/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

  var yl = board.length;

  if (!board || yl <= 0) {
    return;
  }

  var xl = board[0].length;

  var q = [];

  var fill = function (x, y) {

    if (
      x < 0 ||
      y < 0 ||
      x > xl - 1 ||
      y > yl - 1 ||
      board[y][x] !== 'O'
      ) {
      return;
    }

    q.push([x, y]);
    board[y][x] = '?'
  };

  var bfs = function (x, y) {

    if (board[y][x] === 'O') {
      q.push([x, y]);
      fill(x, y);
    }

    while (q.length > 0) {

      var curr = q.shift();
      var currX = curr[0];
      var currY = curr[1];
      fill(currX + 1, currY);
      fill(currX - 1, currY);
      fill(currX, currY + 1);
      fill(currX, currY - 1);

    }

  };

  var i, j;

  for (i = 0 ; i < xl ; i++) {
    bfs(i, 0);
    bfs(i, yl - 1);
  }

  for (i = 1 ; i < yl - 1 ; i++) {
    bfs(0, i);
    bfs(xl - 1, i);
  }

  for (i = 0 ; i < yl ; i++) {
    for (j = 0 ; j < xl ; j++) {
      if (board[i][j] === '?') {
        board[i][j] === 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] === 'X';
      }
    }

  }

};