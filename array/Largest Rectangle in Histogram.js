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