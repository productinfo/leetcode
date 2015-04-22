/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  var l = height.length;

  if (l === 0) {
    return 0;
  }

  var max = -1;

  var start = 0;
  var end = l - 1;
  var area;
  
  while (start < end) {

    area = Math.min(height[start], height[end]) * (end - start);
    max = Math.max(area, max);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }

  }

  return max;


};