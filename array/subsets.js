/**
 * @param {number[]} S
 * @return {number[][]}
 */
var subsets = function(S) {

  var result = [[]];

  if (S.length === 0) {
    return result;
  }

  var i = 0, size, j, sub;

  S.sort(function (a, b) {
    return a - b;
  });

  for (; i < S.length ; i++) {

    size = result.length;

    for (j = 0 ; j < size ; j++) {

      sub = [].concat(result[j]);

      sub.push(S[i]);

      result.push(sub);

    }

  }


  return result;
};