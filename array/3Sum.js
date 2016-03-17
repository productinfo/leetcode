/**
 * 2/25/2016
 */
var threeSum = function(nums) {

  const len = nums.length;
  let result = [];

  if (len === 0 || len < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  let j, k, offset;

  for (let i = 0; i < len - 2; i++) {

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    j = i + 1;
    k = len - 1;
    offset = -nums[i];

    while (j < k) {
      if (nums[j] + nums[k] === offset) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (nums[j] + nums[k] < offset) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
