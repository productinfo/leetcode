/**
 * @param {number[]} A
 * @return {void} Do not return anything, modify A in-place instead.
 */
var sortColors = function(A) {
    
  var red = 0, blue = A.length - 1;

  while (A[red] === 0) {
    red++;
  }

  while (A[blue] === 2) {
    blue--;
  }

  var index = red;

  while (index <= blue) {

    if (A[index] === 0 && index > red) {
      swap(A, index, red++);
    } else if (A[index] === 2) {
      swap(A, index, blue--);
    } else {
      index++;
    }

  }

};

function swap (A, x, y) {
  var tmp = A[x];
  A[x] = A[y];
  A[y] = tmp;
}