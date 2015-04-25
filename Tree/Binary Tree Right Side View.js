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
var rightSideView = function(root) {

  var res = [];

  if (!root) {
    return res;
  }

  var q = [],
      j,
      node,
      size,
      tmp;

  q.push(root);

  while (q.length > 0) {

    size = q.length;
    
    for (j = 0 ; j < size ; j++) {
      
      node = q.shift();
      
      if (j === 0) {
        res.push(node.val);
      }
      
      if (node.right) {
        q.push(node.right);
      }

      if (node.left) {
        q.push(node.left);
      }
    }

  }

  return res;
};