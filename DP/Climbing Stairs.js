/**
 * @param {number} n
 * @return {number}
 */

// time: O(n)
// space: O(n)
var climbStairs = function(n) {

  var ans = [1, 1];

  for (var i = 2 ; i <= n ; i++) {

    ans[i] = ans[i - 1] + ans[i - 2];

  }

  return ans[n];

};

function x (n, dd) {

  var arr = dd || [];

  if (n === 0) {
    console.log(arr.join(''));
  }

  if (n >= 1) {
      x(n - 1, ['1'].concat(arr));
  }

  if (n >= 2) {
      x(n - 2, ['2'].concat(arr));
  }

}

x(3);

// time: O(n)
// space: O(1)
// 3/31/2016
const climbStairs = (x) => {
  let d1 = 1;
  if (x < 2) return d1;
  let d2 = 2;
  if (x < 3) return d2;
  let r, i = 3;
  while (i++ <= x) {
    r = d1 + d2;
    d1 = d2;
    d2 = r;
  }
  return r;
};

// 9/25/2016
var climbStairs = function(n) {
  let d1 = 1;
  let d2 = 1;
  let d3 = 1;
  let i = 2;
  while (i <= n) {
    d3 = d1 + d2;
    d1 = d2;
    d2 = d3;
    i++;
  }
  return d3;
};

// 11/27/2016
const climbStairs = n => {
  if (n < 2) return 1;
  let d1 = 1;
  let d2 = 1;
  let d3;
  while (n > 1) {
    d3 = d1 + d2;
    d1 = d2;
    d2 = d3;
  }
  return d3;
}
