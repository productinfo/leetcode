/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {ListNode} head
 * @returns {TreeNode}
 */
var sortedListToBST = function(head) {

  if (!head) {
    return null;
  }

  // get lenght of linked list
  var len = 0, temp = head;

  while (temp) {
    len++;
    temp = temp.next;
  }

  var build = function (start, end) {

    if (start > end) {
      return null;
    }

    // get mid point
    var mid = (start + end) >> 1;

    var left = build(start, mid - 1);

    var root = new TreeNode(head.val);

    head = head.next;

    root.left = left;

    var right = build(mid + 1, end);

    root.right = right;

    return root;

  };

  return build(0, len - 1);

};

// 8/31/2017
const go = (head, tail = null) => {
  if (head === tail) return null;
  let slow = head;
  let fast = head;
  while (fast !== tail && fast.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const node = new TreeNode(slow.val);
  node.left = go(head, slow);
  node.right = go(slow.next, tail);
  return node;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  return head ? go(head) : null;
};