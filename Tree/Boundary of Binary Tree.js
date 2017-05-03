/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var boundaryOfBinaryTree = function(root) {
  const res = [];
  if (!root) return [];
  const leaf = r => {
    if (!r) return;
    if (r && !r.left && !r.right) res.push(r.val);
    leaf(r.left);
    leaf(r.right);
  };
  const goLeft = r => {
    if (!r || (!r.left && !r.right)) return;
    res.push(r.val);
    if (r.left) {
      goLeft(r.left);
    } else {
      goLeft(r.right);
    }
  };
  const goRight = r => {
    if (!r || (!r.left && !r.right)) return;
    if (r.right) {
      goRight(r.right);
    } else {
      goRight(r.left);
    }
    res.push(r.val);
  };
  res.push(root.val);
  goLeft(root.left);
  leaf(root.left);
  leaf(root.right);
  goRight(root.right);
  return res;
};

// clockwise
var boundaryOfBinaryTree = function(root) {
  const res = [];
  if (!root) return [];
  const leaf = r => {
    if (!r) return;
    if (r && !r.left && !r.right) res.push(r.val);
    leaf(r.right);
		leaf(r.left);
  };
  const goLeft = r => {
    if (!r || (!r.left && !r.right)) return;
    if (r.left) {
      goLeft(r.left);
    } else {
      goLeft(r.right);
    }
    res.push(r.val);
  };
  const goRight = r => {
    if (!r || (!r.left && !r.right)) return;
    res.push(r.val);
    if (r.right) {
      goRight(r.right);
    } else {
      goRight(r.left);
    }
  };
  res.push(root.val);
  goRight(root.right);
  leaf(root.right);
  leaf(root.left);
  goLeft(root.left);
  return res;
};