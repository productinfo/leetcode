/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

  var len = nums.length,
      reach = len,
      i = 0, sum = 0, index = 0;

  for (; i < len ; i++) {

    sum += nums[i];

    if (sum >= s) {

      while (sum - nums[index] >= s) {
        sum -= nums[index++];
      }

      reach = Math.min(reach, i - index + 1);

    }

  }

  return reach >= len ? 0 : reach;

};

// 11/30/2016
const minSubArrayLen = (s, arr) => {
  const l = arr.length;
  let min = Infinity;
  let left = 0;
  let total = 0;
  for (let i = 0; i < l; i++) {
    total += arr[i];
    while (total >= s) {
      min = Math.min(min, i - left + 1);
      total -= arr[left++];
    }
  }
  return min === Infinity ? 0 : min;
};