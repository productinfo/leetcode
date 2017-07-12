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

// 10/23/2016
const numTrees = n => {
  const t = [1, 1];
  for (let i = 2; i <= n; i++) {
    t[i] = 0;
    for (let j = 0; j < i; j++) {
      t[i] += t[j] * t[i - j - 1];
    }
  }
  return t[n];
};
