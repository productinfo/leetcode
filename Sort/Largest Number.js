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

// 4/7/2018
var largestNumber = function(nums) {
  nums = nums.sort((a, b) => {
    const d1 = '' + a + b;
    const d2 = '' + b + a;
    return d2 - d1;
  });
  return nums[0] === 0 ? '0' : nums.join('')
};
