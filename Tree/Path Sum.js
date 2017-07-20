/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n) space O(log(n)) Accepted

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @returns {boolean}
 */
var hasPathSum = function(root, sum) {

  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return sum === root.val;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};

// 10/23/2016
const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};