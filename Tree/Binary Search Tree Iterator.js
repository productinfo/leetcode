/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {

  this.stack = [];

  while (root) {
    this.stack.push(root);
    root = root.left
  }

};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {

  return this.stack.length > 0;

};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {

  var node = this.stack.pop(), v = node.val;

  node = node.right;

  while (node) {
    this.stack.push(node);
    node = node.left;
  }

  return v;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

// 11/30/2016
class BSTIterator {
  constructor(root) {
    this.stack = [];
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }
  next() {
    let node = this.stack.pop();
    const val = node.val;
    node = node.right;
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
    return val;
  }
  hasNext() {
    return !!this.stack.length;
  }
}