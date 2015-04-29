/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

// time O(n) space O(1) Accepted

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {

  if (!root) {
    return;
  }

  var cur = root,
      head = null,
      prev = null;

  while (cur) {

    while (cur) {

      if (cur.left) {

        if (prev) {
          prev.next = cur.left;
        } else {
          head = cur.left;
        }

        prev = cur.left;

      }

      if (cur.right) {

        if (prev) {
          prev.next = cur.right;
        } else {
          head = cur.right;
        }

        prev = cur.right;

      }

      cur = cur.next;
    }

    cur = head;
    head = null;
    prev = null;

  }

};