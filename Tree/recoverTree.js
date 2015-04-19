/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify the binary tree in-place instead.
 */
var recoverTree = function(root) {

  if (!root) {
    return;
  }

  var pv, n2, n1;

  var inorder = function (r) {

    if (!r) {
      return;
    }

    inorder(r.left);

    if (pv) {

      if (pv.val >= r.val) {
        if (!n1) {
          n1 = r;
        }
        n2 = r;
      }

    }

    pv = r;

    inorder(r.right);

  };

  inorder(root);

  // swap
  
  var tmp = n1.val;
  n1.val = n2.val;
  n2.val = tmp;

};