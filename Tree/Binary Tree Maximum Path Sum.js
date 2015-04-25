/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxPathSum = function(root) {

  var max = Number.NEGATIVE_INFINITY;

  if (!root) {
    return 0;
  }

  var go = function (rt) {

    if (!rt) {
      return 0;
    } else {
      var l = go(rt.left);
      var r = go(rt.right);

      var v = rt.val;

      var mx1 = Math.max(Math.max(l, r) + v, v);
      var mx2 = Math.max(Math.max(l + r + v, mx1), v);

      max = Math.max(max, mx2);

      return mx1;
    }
  };

  go(root);

  return max;
};