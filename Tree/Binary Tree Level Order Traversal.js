/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n) space O(n) Accepted

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var levelOrder = function(root) {
  
  var result = [], q = [];

  if (!root) {
    return result;
  }

  q.push(root);

  while (q.length > 0) {

    var tmp = [];

    var size = q.length;

    for (var i = 0 ; i < size ; i++) {

      var node = q.shift();

      tmp.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

    }

    result.push(tmp);

  }

  return result;

};