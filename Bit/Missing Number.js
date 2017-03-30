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

// 11/13/2016
const missingNumber = arr => {
  const len = arr.length;
  let sum = Math.floor(len * (len + 1) / 2);
  for (let i = 0; i < len; i++) {
    sum -= arr[i];
  }
  return sum;
};

// 3/27/2017
const missingNumber = arr => {
  const len = arr.length;
  const total = ((0 + len) * (len + 1)) >> 1;
  const sum = arr.reduce((t, a) => t + a, 0);
  return total - sum;
};