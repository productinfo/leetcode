// O(n)
const diameterOfBinaryTree = root => {
  let max = 0;
  const dfs = r => {
    if (!r) return 0;
    const lh = dfs(r.left);
    const rh = dfs(r.right);
    if (lh + rh > max) max = lh + rh;
    return Math.max(lh + 1, rh + 1);
  };
  dfs(root);
  return max;
};

// O(n)
const diameterOfBinaryTree = root => {
  let max = 0;
  const go = r => {
    if (!r) return 0;
    const left = go(r.left);
    const right = go(r.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  go(root);
  return max;
};