/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  var root = new ListNode(0),
      p2 = root,
      p1 = root;

  root.next = head;

  while(n--) p2 = p2.next;

  while (p2.next) {
    p2 = p2.next;
    p1 = p1.next;
  }

  p1.next = p1.next.next;

  return root.next;

};

// 11/25/2016
const removeNthFromEnd = (head, n) => {
  const node = new ListNode(-1);
  node.next = head;
  let cur = node;
  while (n--) {
    cur = cur.next;
  }
  let x = node;
  while (cur.next) {
    cur = cur.next;
    x = x.next;
  }
  x.next = x.next.next;
  return node.next;
};
