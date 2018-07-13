// 6/6/2018
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  const heap = [];
  const sort = (a, b) => b.diff - a.diff;
  const dfs = r => {
    if (!r) return;
    const diff = Math.abs(r.val - target);
    heap.push({
      val: r.val,
      diff
    });
    if (heap.length > k) {
      heap.sort(sort);
      heap.shift();
    }
    dfs(r.left);
    dfs(r.right);
  };
  dfs(root);
  return heap.map(obj => obj.val);
};
