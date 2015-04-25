/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {

  var l = height.length;

  if (l === 0) {
    return 0;
  }

  var stack = [];

  var i = 0;

  var tmp, max = 0;

  var h, w

  while (i < l) {

    if (
      stack.length === 0
      || height[stack[l - 1]] <= height[i]
    ) {
      stack.push(i++);
    } else {

      tmp = stack.pop();

      h = height[tmp];

      if (stack.length === 0) {
        w = i;
      } else {
        w = i - stack[l - 1] - 1;
      }

      max = Math.max(max, w * h);

    }

  }

  return max;

};