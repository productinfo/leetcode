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

// 9/25/2016
var totalNQueens = function(n) {
  const res = [];
  let counter = 0;
  const record = [];

  const valid = (y) => {
    for (let x = 0; x < y; x++) {
      if (
        record[y] === record[x] // only check vertical
        ||
        Math.abs(record[y] - record[x]) === y - x
      ) {
        return false;
      }
    }
    return true;
  };

  const recur = (y) => {
    if (y === n) {
      // stop recursion
      counter++;
      return;
    }
    for (let x = 0; x < n; x++) {
      record[y] = x;
      if (valid(y)) {
        recur(y + 1);
      }
    }
  };

  recur(0);
  return counter;
};
