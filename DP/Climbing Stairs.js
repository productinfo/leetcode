/**
 * @param {number} n
 * @return {number}
 */
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