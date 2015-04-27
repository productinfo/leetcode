/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(nlog(n)) space O(log(n)) Accepted

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var isBalanced = function(root) {

  if (!root) {
    return true;
  }

  return isBalanced(root.left)
      && isBalanced(root.right)
      && Math.abs(height(root.left) - height(root.right)) <= 1;
};

var height = function (root) {

  if (!root) {
    return 0;
  }

  return Math.max(height(root.left), height(root.right)) + 1;

};