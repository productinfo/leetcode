var getMinimumDifference = function(root) {
  if (!root) return 0;
  let min = Infinity;
  let pv = null;
  const dfs = (r) => {
    if (!r) return;
    dfs(r.left);
    if (pv !== null) min = Math.min(min, r.val - pv);
    pv = r.val;
    dfs(r.right);
  };
  dfs(root);
  return min;
};
