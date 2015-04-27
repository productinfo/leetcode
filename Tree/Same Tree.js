/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n) space O(log(n)) Accepted

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {

  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else {
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

};