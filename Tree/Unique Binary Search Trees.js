/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
  var c = [0, 1], i = 2, j;

  for (i ; i < n ; i++) {

    for (j = 0 ; j < i ; j++) {

      c[i] += c[j] * c[i - j - 1];

    }

  }

  return c[n];

};