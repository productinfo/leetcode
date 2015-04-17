/**
 * @param {number[]} A
 * @param {number} target
 * @return {boolean}
 */
var search = function(A, target) {

  var len = A.length, i = 0;

  for (; i < len ; i++) {
    if (target === A[i]) {
      return true;
    }
  }

  return false;

};