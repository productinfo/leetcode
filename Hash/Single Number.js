/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  var l = nums.length;

  var a = 0;

  for (var i = 0 ; i < l ; i++) {
    a ^= nums[i];
  }

  return a;

};