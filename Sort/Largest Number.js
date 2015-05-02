/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

  var l = nums.length;

  var res = '';

  if (l === 0) {
    return res;
  }

  nums = nums.sort(function (a, b) {

    var d1 = a + '' + b;
    var d2 = b + '' + a;
  
    return d2 - d1;

  });

  return nums.join('');

};