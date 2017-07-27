/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
  if (!root) {
    return root;
  }

  var tmp = root.left;
  root.left = root.right
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;

};

// 10/23/2016
const invertTree = root => {
  if (!root) return null;
  const t = root.left;
  root.left = root.right;
  root.right = t;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};