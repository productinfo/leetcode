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

function stairs(n,array) { 
   if(array===undefined) array=[]; 
   if(n>=1) { 
      stairs(n-1,["1"].concat(array)); 
   } 
   if(n>=2) { 
      stairs(n-2,["2"].concat(array)); 
   } 
   if(n==0) console.log(array.join("")); 
}
stairs(5);