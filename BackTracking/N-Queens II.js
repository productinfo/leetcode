/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

  var res = 0, rec = [];

  var go = function (row) {

    var i , j, tmp, s;

    if (row === n) {
      res += 1;
      return;

    }

    for (i = 0 ; i < n ; i++) {

      rec[row] = i;

      if (check(row, rec)) {

        go(row + 1);

      }

    }

  };

  go(0);

  return res;

};

var check = function (row, rec) {

  var i;

  for (i = 0 ; i < row ; i++) {

    if (rec[row] === rec[i] || Math.abs(rec[row] - rec[i]) === row - i) {
      return false;
    }

  }

  return true;

};