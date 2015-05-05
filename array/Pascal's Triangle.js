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
    
    result.push([]);

    for (var j = 0 ; j <= i ; j++) {

      result[i].push(1);

    }

  }

  for (var k = 2 ; k < numRows ; k++) {

    var prev = result[k - 1];
    var curr = result[k];

    for (var m = 1 ; m < prev.length ; m++) {

      curr[m] = prev[m - 1] + prev[m];

    }

  }

  return result;
  
};