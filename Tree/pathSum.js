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
 * @param {number} sum
 * @returns {number[][]}
 */
var pathSum = function(root, sum) {

  var result = [], sub = [];

  var go = function (root, total) {

    if (!root) {
      return;
    }

    if (root.val === total && !root.left && !root.right) {
      // to leaf
      var copy = [].concat(sub);
      copy.push(root.val);
      result.push(copy);
    }

    sub.push(root.val);

    if (root.left) {
      go(root.left, total - root.val);
    }

    if (root.right) {
      go(root.right, total - root.val);
    }

    sub.pop();

  };

  go(root, sum);

  return result;

};