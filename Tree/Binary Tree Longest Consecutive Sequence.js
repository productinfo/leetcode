var longestConsecutive = function(root) {
  if (!root) return 0;
  let max = 0;
  const dfs = (node, pv, path) => {
    if (!node) return;
    
    if (pv) {
      if (pv.val + 1 === node.val) {
        path++;
      } else {
        path = 1;
      }
    }
    
    max = Math.max(max, path);

    dfs(node.left, node, path);
    dfs(node.right, node, path);
  };
  dfs(root, null, 1);
  return max;
};

var longestConsecutive = function(root) {
  let max = 0;
  if (!root) return max;
  const dfs = (node, cur, target) => {
    if (!node) return;
    if (node.val === target) cur++;
    else cur = 1;
    max = Math.max(max, cur);
    dfs(node.left, cur, node.val + 1);
    dfs(node.right, cur, node.val + 1);
  };
  dfs(root, 0, root.val);
  return max;
};
