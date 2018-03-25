/*

use two pointer from outside to inside
to find the max

key is to defind the `height` every single time
key is min(h[left], h[right])

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const l = height.length;
  if (!l) return 0;
  let left = 0;
  let right = l - 1;
  let max = 0;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    max = Math.max(max, h * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
