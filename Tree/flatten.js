/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {void} Do not return anything, modify nodes in-place instead.
 */
var flatten = function(root) {

  if (!root) {
    return;
  }

  var l = root.left,
      r = root.right;

  root.left = null;
  root.right = null;

  flatten(l);
  flatten(r);

  root.right = l;

  var c = root;

  while (c.right) {
    c = c.right;
  }

  c.right = r;

};