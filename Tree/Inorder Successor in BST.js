// O(h) = O(logn)
const inorderSuccessor = (root, p) => {
  let succ = null;
  while (root) {
    if (p.val < root.val) {
      succ = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return succ;
};