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

// 10/22/2016
const missingNumber = nums => {
  const len = nums.length;
  let sum = ((len + 1) * len) >> 1;
  for (let i = 0; i < len; i++) {
    sum -= nums[i];
  }
  return sum;
};
