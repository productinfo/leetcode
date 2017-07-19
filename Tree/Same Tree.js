
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n)

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {

  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

// 3/29/2017
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  else if (!p || !q) return false;
  else return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};