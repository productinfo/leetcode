/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {

  var res = [0], inc, i, j, tmp;

  for (i = 0 ; i < n ; i++) {

    inc = 1 << i;

    for (j = res.length - 1 ; j >= 0 ; j--) {

      tmp = res[j] + inc;

      res.push(tmp);

    }

  }

  return res;

};