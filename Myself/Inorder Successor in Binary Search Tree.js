// http://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const minValue = (root) => {
  if (!root) {
    return null;
  }

  let cur = root;
  while (cur) {
    cur = cur.left;
  }

  return cur;
};

const foo = (root, node) => {

  // root is null, return
  if (!root) {
    return null;
  }

  // if right node is not null
  // the min value of the right subtree is the answer
  if (root.right) {
    return minValue(root.right);
  }

  // if right node is null
  // start from root and search for answer
  let ans;
  while (root) {
    if (node.val < root.val) {
      ans = root;
      root = root.left;
    } else if (node.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }

  return ans;
};
