var pourWater = function(heights, V, K) {
  if (!heights || !heights.length || V === 0) return heights;
  let i;
  while (V) {
    i = K;
    for (let j = K - 1; j >= 0; j--) {
      if (heights[j] > heights[i]) break;
      else if (heights[j] < heights[i]) i = j;
    }
    if (i !== K) {
      heights[i]++;
      V--;
      continue;
    }
    for (let j = K + 1; j < heights.length; j++) {
      if (heights[j] > heights[i]) break;
      else if (heights[j] < heights[i]) i = j;
    }
    heights[i]++;
    V--;
  }
  return heights;
};
