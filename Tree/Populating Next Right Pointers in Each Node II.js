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

// 3/30/2017
const connect = root => {
  if (!root) return;
  let cursor = root;
  let leftMost = null;
  let levelWalker = null;

  while (cursor) {
    while (cursor) { // iterate on the current level
      // left child
      if (cursor.left) {
        if (levelWalker) {
          levelWalker.next = cursor.left;
        } else {
          leftMost = cursor.left;
        }
        levelWalker = cursor.left;
      }
      // right child
      if (cursor.right) {
        if (levelWalker) {
          levelWalker.next = cursor.right;
        } else {
          leftMost = cursor.right;
        }
        levelWalker = cursor.right;
      }
      cursor = cursor.next;
    }
    cursor = leftMost;
    leftMost = null;
    levelWalker = null;
  }
};

// BFS
// use Queue
// time: O(n)
// space: O(n)
const connect = root => {
  if (!root) return;
  const q = [root];
  while (q.length) {
    const size = q.length;
    let next = null;
    for (const k = 0; k < size; k++) {
      const n = q.shift();
      n.next = next;
      next = n;
      if (n.right) q.push(n.right);
      if (n.left) q.push(n.left);
    }
  }
};