/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

  var l = A.length;

  if (l === 0) {
    return 0;
  } 

  var occur = 1, index = 0;

  for (var i = 1 ; i < l ; i++) {

    if (A[index] === A[i]) {

      if (occur === 2) {
        continue;
      }
      occur++;

    } else {
      occur = 1;
    }
    A[++index] = A[i];

  }

  return index + 1;

};