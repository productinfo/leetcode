const largestRectangleArea = (h) => {
  const total = h.length;
  const stack = [];
  let i = 0, max = 0;
  const getMax = _ => max = Math.max(
    max,
    h[stack.pop()] * (i - (stack.length ? stack[stack.length - 1] + 1 : 0))
  );
  while (i < total) {
    // as long as the current bar is shorter than the last one in the stack
    // we keep popping out the stack and calculate the area based on
    // the popped bar
    while (stack.length && h[i] < h[stack[stack.length - 1]]) {
      // tricky part is how to handle the index of the left bound
      getMax();
    }
    // put current bar's index to the stack
    stack.push(i++);
  }

  // finally pop out any bar left in the stack and calculate the area based on it
  while (stack.length) {
    getMax();
  }

  return max;
};

// 8/25/2017
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.push(0);
  const len = heights.length;
  let area = 0;
  const stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack[stack.length - 1]];
      stack.pop();
      const l = stack.length ? stack[stack.length - 1] : -1;
      area = Math.max(area, h * (i - l - 1));
    }
    stack.push(i);
  }
  return area;
};

// 3/24/2018
// if increasing, push index to stack
// else if decreasing, calculate area

var largestRectangleArea = function(heights) {
  let res = 0;
  if (!heights || !heights.length) return res;
  const stack = [];
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const ht = heights[stack.pop()];
      const start = stack.length ? stack[stack.length - 1] : -1;
      res = Math.max(res, ht * (i - start - 1));
    }
    stack.push(i);
  }
  return res;
};
