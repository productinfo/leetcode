/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var postorderTraversal = function(root) {

  var res = [];

  if (!root) {
    return res;
  }

  var stack = [];

  stack.push(root);

  while (stack.length > 0) {

    var node = stack.pop();

    res.unshift(node.val);

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }

  }

  return res;

};