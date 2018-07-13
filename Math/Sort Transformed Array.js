/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  let start = 0;
  let end = nums.length - 1;
  const res = [];
  const get = index => a * nums[index] * nums[index] + b * nums[index] + c;
  // if a >= 0, start from tail
  // else start from head
  let i = a >= 0 ? nums.length - 1 : 0;
  while (start <= end) {
    const n1 = get(start);
    const n2 = get(end);
    if (a >= 0) {
      if (n1 > n2) {
        res[i--] = n1;
        start++;
      } else {
        res[i--] = n2;
        end--;
      }
    } else {
      if (n1 < n2) {
        res[i++] = n1;
        start++;
      } else {
        res[i++] = n2;
        end--;
      }
    }
  }
  return res;
};

console.log(sortTransformedArray(
  [-4, -2, 2, 4], -1, 3 ,5
))
