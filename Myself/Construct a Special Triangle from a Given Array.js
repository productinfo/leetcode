/**
 * http://algorithms.tutorialhorizon.com/construct-a-special-triangle-from-a-given-array/
 */

var printTriangle = function (arr) {

  var len = arr.length;

  var res = [arr];

  var i, pv, cur, j;

  for (i = 0 ; i < len - 1 ; i++) {

    pv = res.shift();

    cur = [];

    for (j = 0 ; j < pv.length - 1 ; j++) {

      cur[j] = pv[j] + pv[j + 1];

    }

    res.unshift(pv);
    res.unshift(cur);

  }

  return res;
};