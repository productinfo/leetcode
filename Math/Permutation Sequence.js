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

  t = (t / n) >> 0; // n - 1

  k--;

  var index, d;

  for (i = n - 1 ; i >= 1 ; i--) {

    index = (k / t) >> 0;

    d = nums[index]

    s += d;

    nums.splice(index, 1);

    k %= t;
    t = (t / i) >> 0;

  }
  
  s += nums[0];
  return s;

};