/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

  var len = nums.length;

  if (len === 0) {
      return null;
  }

  var mid = len >> 1,
      root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

// 10/23/2016
const sortedArrayToBST = arr => {
  const len = arr.length;
  if (!len) return null;
  const m = len >> 1;
  const root = new TreeNode(arr[m]);
  root.left = sortedArrayToBST(arr.slice(0, m));
  root.right = sortedArrayToBST(arr.slice(m + 1));
  return root;
};