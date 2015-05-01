/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {

  var l = height.length;

  if (!height || l === 0) {
    return 0;
  }

  var stack = [];

  var max = 0, i = 0, h, w;

  while (i < l) {

    if (
      stack.length > 0 ||
      height[i] >= height[stack[stack.length - 1]]
      ) {
      stack.push(i);
      i++;
    } else {

      h = height[stack.pop()];

      w = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;

      max = Math.max(max, h * w);

    }

  }

  while (stack.length > 0) {

    h = height[stack.pop()];

    w = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;

    max = Math.max(max, h * w);

  }

  return max;

};