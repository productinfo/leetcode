/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

  var l = nums.length;

  if (l === 0) return '';

  nums = nums.sort(function (a, b) {

    var d1 = a + '' + b,
        d2 = b + '' + a;

    return d2 - d1;

  }).join('');

  return nums[0] === '0' ? '0' : nums;

};
