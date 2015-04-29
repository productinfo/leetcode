/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {boolean}
 */
var isValidBST = function(root) {

  if (!root) {
    return true;
  }

  return valid(root, Number.NEGATIVE_INFINITY, Number.MAX_VALUE);

};

var valid = function (r, min, max) {

  if (!r) {
    return true;
  }

  if (min < r.val
    && r.val < max
    && valid(r.left, min, r.val)
    && valid(r.right, r.val, max)
  ) {
    return true;
  } else {
    return false;
  }

};