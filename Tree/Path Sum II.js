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
      return;
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

// 9/2/2016
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

  const result = [];

  if (!root) return result;

  const sub = [];

  const dfs = (r, remain) => {

    if (!r) return;

    sub.push(r.val);

    if (!r.left && !r.right && remain === r.val) {
      result.push(sub.slice());
      return;
    }

    if (r.left) {
      dfs(r.left, remain - r.val);
      sub.pop();
    }

    if (r.right) {
      dfs(r.right, remain - r.val);
      sub.pop();
    }

  };

  dfs(root, sum);

  return result;

};
