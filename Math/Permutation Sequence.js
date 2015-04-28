/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

  var t = 1, i;

  var nums = [];

  for (i = 1 ; i <= n ; i++) {

    t *= i;
    nums.push(i);

  }

  var s = '';

  t = Math.floor(t / n); // n - 1

  k--;

  var index, d;

  for (i = n - 1 ; i >= 1 ; i--) {

    index = Math.floor(k / t);

    d = nums[index]

    s += d;

    nums.splice(index, 1);

    k %= t;
    t = Math.floor(t / i);

  }
  
  s += nums[0];
  return s;

};