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

// 11/11/2016
const connect = root => {
  if (!root) return;
  let pre = root;
  let cur = null;
  while (pre.left) {
    cur = pre;
    while (cur) {
      cur.left.next = cur.right;
      if (cur.next) cur.right.next = cur.next.left;
      cur = cur.next;
    }
    pre = pre.left;
  }
};

// 3/30/2017
const connect = root => {
  if (!root) return;
  if (root.left) {
    root.left.next = root.right;
    if (root.next) root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
};