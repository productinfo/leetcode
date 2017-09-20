// time: O(n)
// space: O(n)
const maxSubArrayLen = (nums, k) => {
  const l = nums.length;
  if (!l) return 0;
  const map = {};
  let currSum = 0;
  let max = 0;
  for (let i = 0; i < l; i++) {
    currSum += nums[i];
    const prevSum = currSum - k;
    if (currSum === k) max = i + 1;
    else if (prevSum in map) max = Math.max(max, i - map[prevSum]);
    if (!(currSum in map)) map[currSum] = i;
  }
  return max;
};