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
 * @returns {number[]}
 */
var preorderTraversal = function(root) {

  var stack = [], res = [];

  if (!root) {
    return res;
  }

  stack.push(root);

  while (stack.length > 0) {

    var node = stack.pop();

    res.push(node.val);

    if (node.right) {
      stack.push(right);
    }

    if (node.left) {
      stack.push(left);
    }

  }

  return res;

};