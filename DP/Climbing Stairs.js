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