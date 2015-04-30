/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows === 0) {
    return [];
  }

  var result = [];

  for (var i = 0 ; i < numRows ; i++) {

    var tmp = [];

    for (var j = 0 ; j <= i ; j++) {

      tmp.push(1);

    }

    result.push(tmp);

  }

  for (var k = 2 ; k < numRows ; k++) {

    var prev = result[k - 1];
    var curr = result[k];

    for (var m = 1 ; m < curr.length - 1 ; m++) {

      curr[m] = prev[m - 1] + prev[m];

    }

  }

  return result;
  
};