/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  const go = (l, r) => {
    if (l === r) return nums[l];
    return Math.max(
      nums[l] - go(l + 1, r),
      nums[r] - go(l, r - 1)
    );
  };
  return go(0, nums.length - 1);
};
