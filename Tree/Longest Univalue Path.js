const longestUnivaluePath = root => {
  let max = 0;
  if (!root) return 0;
  const dfs = r => {
    if (!r) return 0;
    let lside = dfs(r.left);
    let rside = dfs(r.right);
    if (r.left && r.val === r.left.val) {
      lside++;
    } else {
      lside = 0;
    }
    if (r.right && r.val === r.right.val) {
      rside++;
    } else {
      rside = 0;
    }
    max = Math.max(max, lside + rside);
    return Math.max(lside, rside);
  };
  dfs(root);
  return max;
};
