/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  /* O(n) */

  if (!root) return null;

  if (root === p || root === q) return root;

  var l = lowestCommonAncestor(root.left, p, q),
      r = lowestCommonAncestor(root.right, p, q);

  if (l && r) return root;

  return l ? l : r;

};