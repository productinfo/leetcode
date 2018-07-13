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

// 3/23/2018
// DFS

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  const tmp = [];

  // [0, 1, 2, 3]
  const valid = (arr, level) => {
    for (let i = 0; i < level; i++) {
      if (arr[i] === arr[level] || Math.abs(arr[level] - arr[i]) === level - i) {
        return false;
      }
    }
    return true;
  };

  const output = arr => arr.reduce((result, pos) => {
    const x = Array.from({ length: n }, _ => '.');
    x[pos] = 'Q';
    result.push(x.join(''));
    return result;
  }, []);

  const dfs = (level) => {
    if (level === n) {
      res.push(output(tmp));
      return;
    }
    for (let i = 0; i < n; i++) {
      tmp[level] = i;
      if (valid(tmp, level)) dfs(level + 1);
    }
  };
  dfs(0);
  return res;
};
