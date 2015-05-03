/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

  var l = A.length;

  if (l <= 2) {
    return l;
  }

  var pv = 1, cur = 2;

  while (cur < l) {

    if (A[cur] === A[pv] && A[cur] === A[pv - 1]) {
      cur++;
    } else {
      A[++pv] = A[cur++]
    }

  }

  return pv + 1;

};