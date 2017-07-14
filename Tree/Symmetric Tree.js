/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n)

/**
 * @param {TreeNode} root
 * @returns {boolean}
 */
var isSymmetric = function(root) {

  if (root) return same(root.left, root.right);
  else return true;
  
};

var same = function (t1, t2) {

  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return t1.val === t2.val && same(t1.left, t2.right) && same(t1.right, t2.left);

};

// 11/27/2016
const isSymmetric = root => root ? go(r.left, r.right) : false;
const go = (l, r) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return l.val === r.val && go(l.left, r.right) && go(l.right, r.left);
};
