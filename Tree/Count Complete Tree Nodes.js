/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  
  if (!root) {
    return 0;
  }

  var hl = 0, hr = 0,
      l = root, r = root;

  while (l) {
    l = l.left;
    hl++;
  }

  while (r) {
    r = r.right;
    hr++;
  }

  if (hl === hr) {
    return Math.pow(2, hl) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
    
};