// BST to LST
class DLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
const x = root => {
  if (!root) return null;
  let head = new DLNode(-1);
  let cur = head;
  const stack = [];
  const res = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      const dln = new DLNode(root.val);
      cur.next = dln;
      dln.prev = cur;
      cur = dln;
      root = root.right;
    }
  }
  return head.next;
};

// LST to BST
const y = head => {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (slow.val === fast.val) return new TreeNode(slow.val);
  slow.prev.next = null;
  fast = slow.next;
  const r = new TreeNode(slow.val);
  r.left = y(head);
  r.right = y(fast);
  return r;
};