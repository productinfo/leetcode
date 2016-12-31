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

// 10/20/2016
const removeElement = (arr, val) => {
  const len = arr.length;
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] !== val) {
      arr[index++] = arr[i];
    }
  }
  return index;
};
