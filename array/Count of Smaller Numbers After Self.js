var countSmaller = function(nums) {
  const res = [];
  const tmp = [];
  const len = nums.length;
  const find = k => {
    if (!tmp.length) return 0;
    for (let j = 0; j < tmp.length; j++) {
      if (tmp[j] >= nums[k]) return j;
    }
    return tmp.length;
  }
  for (let i = len - 1; i >= 0; i--) {
    const index = find(i);
    res.unshift(index);
    tmp.splice(index, 0, nums[i]);
  }
  return res;
};
