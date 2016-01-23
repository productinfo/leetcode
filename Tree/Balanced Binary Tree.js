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
