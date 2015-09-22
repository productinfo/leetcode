var find = function (root) {
  if (!root) return null;

  while (root.right && root.right.right) {
    root = root.right
  }

  return root.right.left ? root.right.left : root;
};
