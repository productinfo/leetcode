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

// 8/29/2016
const maxPathSum = function(root) {
  if (!root) return 0;
  let max = Number.NEGATIVE_INFINITY;
  const go = rt => {
    if (!rt) {
      return 0;
    }

    const l = go(rt.left);
    const r = go(rt.right);
    const v = rt.val;
    const mx1 = Math.max(l + v, r + v, v);
    const mx2 = Math.max(l + r + v, mx1, v);
    max = Math.max(max, mx2);
    return mx1;
  };
  go(root);
  return max;
};

// 8/31/2017
var maxPathSum = function(root) {
  let max = -Infinity;
  if (!root) return max;
  const go = node => {
    if (!node) return 0;
    const l = go(node.left);
    const r = go(node.right);
    const { val: v } = node;
    const m1 = Math.max(v, v + l, v + r);
    max = Math.max(max, m1, v + l + r);
    return m1;
  };
  go(root);
  return max;
};
