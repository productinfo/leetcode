/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

// time O(nloglog(n)) space O(log(n)) Accepted

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  
  if (!root) {
    return;
  }

  var l = root.left;
  var r = root.right;

  connect(l);
  connect(r);

  while (l) {

    l.next = r;

    l = l.right;

    r = r.left;

  }

};