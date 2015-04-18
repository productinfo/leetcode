/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var zigzagLevelOrder = function(root) {

  var q = [], res = [], node, size, i, tmp, reverse = false;

  if (!root) {
    return res;
  }

  q.push(root);

  while (q.length > 0) {

    size = q.length;

    tmp = [];

    for (i = 0 ; i < size ; i++) {

      node = q.shift();

      if (reverse) {
        tmp.unshift(node.val);
      } else {
        tmp.push(node.val);
      }

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

    }

    reverse = !reverse;
    res.push(tmp);

  }

  return res;


};