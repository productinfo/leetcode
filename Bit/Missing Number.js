/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  if (!nums) return 0;

  var len = nums.length, i = 0, r;

  for (; i < len ; i++) {

    r ^= i ^ nums[i];

  }

  return r ^ len;

};
