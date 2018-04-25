var wiggleSort = function(nums) {
  const len = nums.length;
  if (!nums.length) return;
  const res = [];
  // 1. sort
  nums.sort((a, b) => a - b);
  // 2. split
  let m = ((nums.length - 1) / 2) | 0;
  let index = 0;
  for (let j = 0; j <= m; j++) {
    res[index] = nums[m - j];
    if (index + 1 < len) {
      res[index + 1] = nums[len - 1 - j];
    }
    index += 2;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};
