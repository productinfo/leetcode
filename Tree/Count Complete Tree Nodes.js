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
      cur = root;

  while (cur) {
    cur = cur.left;
    hl++;
  }

  cur = root;

  while (cur) {
    cur = cur.right;
    hr++;
  }

  return hl === hr ? (1 << hl) - 1 : 1 + countNodes(root.left) + countNodes(root.right);

};
