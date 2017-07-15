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

// 9/28/2016
const sumOfLeftLeaves = root => {
  let total = 0;
  if (!root) return total;
  const q = [root];
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (node.left && !node.left.left && !node.left.right) total += node.left.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return total;
};

// 10/23/2016
const sumOfLeftLeaves = root => {
  let sum = 0;
  if (!root) return sum;
  const dfs = r => {
    if (!r) return;
    if (r.left && !r.left.left && !r.left.right) sum += r.left.val;
    dfs(r.left);
    dfs(r.right); 
  };
  dfs(root);
  return sum;
};

// 11/18/2016
const sumOfLeftLeaves = root => {
  if (!root) return 0;
  let total = 0;
  const walk = r => {
    if (!r) return;
    const l = r.left;
    if (!l.left && !l.right) total += l.val;
    walk(r.left);
    walk(r.right);
  };
  walk(root);
  return total;
};

// 3/30/2017
const sumOfLeftLeaves = root => {
  let t = 0;
  const dfs = r => {
    if (!r) return;
    if (r.left && !r.left.left && !r.left.right) t += r.left.val
    if (r.left) dfs(r.left);
    if (r.right) dfs(r.right);
  };
  dfs(root);
  return t;
};
