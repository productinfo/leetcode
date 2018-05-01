const y = arr => {
  const left = [];
  const right = [arr[arr.length - 1]];
  let local = 0;
  let g = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    local = Math.max(local + arr[i], arr[i]);
    g = Math.max(g, local);
    left[i] = g;
  }
  local = 0;
  g = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    local = Math.max(local + arr[i], arr[i]);
    g = Math.max(g, local);
    right[i] = g
  }

  let res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    res = Math.max(res, left[i] + right[i + 1]);
  }
  return res;
};
