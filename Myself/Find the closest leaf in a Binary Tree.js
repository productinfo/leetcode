var closest = function (root, k) {

  if (!root) {
    return null;
  }

  lh = height(root.left);
  rh = height(root.right);

  return Math.min(lh, rh);

};

var height = function (root) {

  if (!root) {
    return 0;
  }

  return Math.max(height(root.left), height(root.right)) + 1;

};