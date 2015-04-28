/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

  var res = [], rec = [];

  var go = function (row) {

    var i , j, tmp, s;

    if (row === n) {

      // reach end, output
      tmp = [];

      for (i = 0 ; i < n ; i++) {

        s = '';

        for (j = 0 ; j < n ; j++) {

          if (rec[i] === j) {
            s += 'Q';
          } else {
            s += '.';
          }

        }

        tmp.push(s);

      }

      res.push(tmp);
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