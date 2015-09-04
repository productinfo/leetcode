////////////////////////////////////////
// use inorder
// time: `O(n)`
////////////////////////////////////////

var kthSmallest = function(root, k) {

  /**
   * time : O(n)
   */

  if (!root || k === 0) return 0;

  var arr = [];

  var inorder = function (r) {

    if (!r) return;

    inorder(r.left);

    arr.push(r.val);

    inorder(r.right);

  }

  inorder(root);

  return arr[k - 1];

};

////////////////////////////////////////
// use Iterator
// time: `O(1)`, space: `O(h)`
////////////////////////////////////////

function Iterator(root) {

  this.stack = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }
}

Iterator.prototype.next = function () {

  var node = this.stack.pop();
  var r = node.right

  while (r) {
    this.stack.push(r);
    r = r.left;
  }

  return node.val;

};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

  if (!root || k < 1) return 0;

  var it = new Iterator(root), val;

  while (k--) v = it.next();

  return v;

};
