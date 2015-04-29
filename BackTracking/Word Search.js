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

  var i, j;

  for (i = 0 ; i < yl ; i++) {

    visited.push([]);

    for (j = 0 ; j < xl ; j++) {
      visited[i].push(false);
    }

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