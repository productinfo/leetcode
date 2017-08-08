/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var getDepth = function (root) {
    if (!root) return 0;
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};
// time : `O(n)`
var isBalanced = function(root) {
    if (!root) return true;
    return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

// 10/25/2016
const getHeight = r => r ? Math.max(getHeight(r.left), getHeight(r.right)) + 1 : 0;

const isBalanced = root => {
  if (!root) return true;
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

// 11/27/2016
const get = r => r
  ? Math.max(get(r.left), get(r.right)) + 1
  : 0;
const isBalanced = root => root
  ? Math.abs(get(root.left) - get(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  : true;