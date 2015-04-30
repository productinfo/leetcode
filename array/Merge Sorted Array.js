/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  
  var p1 = m - 1,
      p2 = n - 1,
      p3 = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {

    if (A[p1] >= B[p2]) {

      A[p3--] = A[p1--];

    } else {

      A[p3--] = B[p2--];

    }

  }

  while (p2 >= 0) {

    A[p3--] = B[p2--];

  }

};