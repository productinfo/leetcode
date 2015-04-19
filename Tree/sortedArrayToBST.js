/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} num
 * @returns {TreeNode}
 */
var sortedArrayToBST = function(num) {
  return build(num, 0, num.length);
};

var build = function (num, start, end) {

  if (start >= end) {
    return null;
  }

  var mid = Math.floor((start + end) / 2);

  var r = new TreeNode(num[mid]);

  r.left = build(num, start, mid);

  r.right = build(num, mid + 1, end);

  return r;

};