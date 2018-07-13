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

const maximalRectangle = matrix => {
  const yl = matrix.length;
  if (!yl) return 0;
  const arr = (matrix[0] + '').split('').map(c => +c);
  const xl = arr.length;
  let max = largestRectangleArea(arr);
  for (let y = 1; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (+matrix[y][x]) {
        arr[x] += (+matrix[y][x]);
      } else {
        arr[x] = 0;
      }
    }
    max = Math.max(max, largestRectangleArea(arr));
  }
  return max;
};

maximalRectangle(
	[
		'10100',
		'10111',
		'11111',
		'10010'
	]
);

// 8/25/2017
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const yl = matrix.length;
  if (!yl) return 0;
  const xl = matrix[0].length;
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
  const arr = matrix[0].map(c => +c);
  let max = largestRectangleArea(arr);
  for (let y = 1; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (+matrix[y][x]) arr[x] += (+matrix[y][x]);
      else arr[x] = 0
    }
    max = Math.max(max, largestRectangleArea(arr));
  }
  return max;
};
maximalRectangle([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
])

// 3/24/2018
var maximalRectangle = function(matrix) {
  let res = 0;
  if (!matrix) return res;
  const yl = matrix.length;
  if (!yl) return res;
  const xl = matrix[0].length;
  const toNumber = ch => +ch;
  const tmp = matrix[0].map(toNumber);
  res = largestRectangleArea(tmp);
  for (let y = 1; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (+matrix[y][x] !== 0) {
        tmp[x] += (+matrix[y][x])
      } else {
        tmp[x] = 0;
      }
    }
    res = Math.max(res, largestRectangleArea(tmp));
  }
  return res;
};
