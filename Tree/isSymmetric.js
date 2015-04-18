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
 * @returns {boolean}
 */
var isSymmetric = function(root) {

  if (root) {
    return same(root.left, root.right);
  } else {
    return true;
  }

};

var same = function (t1, t2) {

  if (!t1 && !t2) {
    return true;
  } else if (!t1 || !t2) {
    return false;
  } else {

    return t1.val === t2.val
        && same(t1.left, t2.right)
        && same(t1.right, t2.left);

  }

};