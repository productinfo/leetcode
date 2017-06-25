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

// 3/27/2017
const merge = (n1, m, n2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (n1[i] < n2[j]) {
      n1[k--] = n2[j--];
    } else {
      n1[k--] = n1[i--];
    }
  }
  while (j >= 0) {
    n1[k--] = n2[j--];
  }
}

// standard version
const merge = (n1, m, n2, n) => {
  const res = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (n1[i] < n2[j]) {
      res.push(n1[i++]);
    } else {
      res.push(n2[j++]);
    }
  }
	while (i < m) {
		res.push(n1[i++]);
	}
	while (j < n) {
		res.push(n2[j++]);
	}
  return res;
};