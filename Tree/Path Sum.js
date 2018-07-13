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
 * @returns {boolean}
 */
var hasPathSum = function(root, sum) {

  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return sum === root.val;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};

// 10/23/2016
const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

// 3/28/2018
var hasPathSum = function(root, sum) {
  let ans = false;
  const dfs = (r, total) => {
    if (!r || ans) return;
    if (total === r.val && !r.left && !r.right) {
      ans = true;
      return;
    }
    dfs(r.left, total - r.val);
    dfs(r.right, total - r.val);
  };
  dfs(root, sum);
  return ans;
};
