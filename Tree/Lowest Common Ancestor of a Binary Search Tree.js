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

// 10/23/2016
const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  return root;
};

// 10/25/2016
const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
  return root;
};
