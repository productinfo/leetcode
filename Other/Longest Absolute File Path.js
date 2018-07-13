var lengthLongestPath = function(input) {
  if (!input || !input.length) return 0;
  let max = 0;
  const map = {
    '0': 0
  };
  let i = 0;
  let level = 1;
  let count = 0;
  let isFile = false;
  const len = input.length;
  while (i < len) {
    while (input[i] === '\t') {
      level++;
      i++;
    }
    
    // get length
    while (i < len && input[i] !== '\n') {
      if (input[i] === '.') isFile = true;
      count++;
      i++;
    }

    // update max
    if (isFile) {
      max = Math.max(max, map[level - 1] + count);
    } else {
      // update map with level and len
      map[level] = map[level - 1] + count + 1;
    }
    
    count = 0;
    level = 1;
    isFile = false;
    // moving
    i++;
  }
  return max;
};

var lengthLongestPath = function(input) {
  if (!input || !input.length) return 0;
  let max = 0;
  // store len per level
  // stack.length will be the current level
  const stack = [0];
  const group = input.split('\n');
  for (const g of group) {
    let level = 0;
    let j = 0;
    while (j < g.length && g[j] === '\t') {
      level++;
      j++;
    }
    while (level + 1 < stack.length) {
      stack.pop();
    }
    const len = stack[stack.length - 1] + g.length - level + 1;
    stack.push(len);
    if (g.includes('.')) max = Math.max(max, len - 1);
  }
  return max;
};
