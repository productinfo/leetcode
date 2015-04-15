/**
 * @param {number[]} A
 * @param {number} elem
 * @returns {number}
 */
var removeElement = function(A, elem) {

  if (A.length === 0) {
    return 0;
  }

  var c = 0;

  for (var i = 0 ; i < A.length ; i++) {

    if (A[i] !== elem) {
      A[c++] = A[i];
    }

  }

  return c;

};