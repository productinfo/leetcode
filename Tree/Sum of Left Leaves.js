/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  const q = [root];
  let total = 0;
  while (q.length > 0) {
    const size = q.length;
    for (let j = 0; j < size; j++) {
      const node = q.shift();
      if (node.left && node.left.left === null && node.left.right === null) total += node.left.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return total;
};


// recursion
var sumOfLeftLeaves = function(root) {
  if (!root || (!root.left && !root.right)) return 0;
  let l = 0;
  let r = 0;
  if (root.left) l = (!root.left.left && !root.left.right) ? root.left.val : sumOfLeftLeaves(root.left);
  if (root.right) r = sumOfLeftLeaves(root.right);
  return l + r;
};
