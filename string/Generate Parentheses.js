/**
 * @param {number} n
 * @return {string[]}
 */

// var map = {};

var generateParenthesis = function(n) {

  var res = [];
  var map = {};

  if (n === 0) {
    return res;
  }

  if (n === 1) {
    res.push('()');
    return res;
  }

  var list = generateParenthesis(n - 1);

  for (var i = 0 ; i < list.length ; i++) {

    for (var j = 0 ; j < list[i].length ; j++) {

      if (j === 0) {
        map[list[i] + '()'] = true;
      } else {
        map[list[i].substring(0, j) + '()' + list[i].substring(j)] = true;
      }

    }

  }

  return Object.keys(map);

};