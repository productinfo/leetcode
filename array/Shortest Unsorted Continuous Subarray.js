// 6/3/2018
const findUnsortedSubarray = nums => {
  const len = nums.length;
  if (!len) return 0;
  let l = 0;
  let r = len - 1;
  let max = -Infinity;
  let min = Infinity;
  while (l < r && nums[l] <= nums[l + 1]) l++;
  if (l >= r) return 0;
  while (nums[r] >= nums[r - 1]) r--;
  for (let k = l; k <= r; k++) {
    max = Math.max(max, nums[k]);
    min = Math.min(min, nums[k]);
  }
  while (l >= 0 && min < nums[l]) l--;
  while (r < len && nums[r] < max) r++;
  return r - l - 1;
};
