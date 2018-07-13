var rob = function(root) {
  let max = 0;
  if (!root) return max;
  const dfs = rt => {
    if (!rt) return [0, 0];
    const l = dfs(rt.left);
    const r = dfs(rt.right)
    return [
      rt.val + l[1] + r[1],
      Math.max(...l) + Math.max(...r)
    ];
  };
  return Math.max(...dfs(root));
};
