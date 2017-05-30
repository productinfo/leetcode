const getMax = arr => Math.max(...arr);
const sum = arr => arr.reduce((total, val) => total + val, 0);
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let l = getMax(nums);
  let h = sum(nums);
  if (m === 1) return h;
  const valid = mid => {
    let count = 1;
    let total = 0;
    for (const n of nums) {
      total += n;
      if (total > mid) {
        total = n;
        count++;
        if (count > m) return false;
      }
    }
    return true;
  };
  while (l <= h) {
    let mid = l + ((h - l) >> 1);
    if (valid(mid)) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};