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
      p1 = root,
      i = 0;

  root.next = head;

  for (; i < n ; i++) {
    p2 = p2.next;
  }

  while (p2.next) {
    p2 = p2.next;
    p1 = p1.next;
  }

  p1.next = p1.next.next;

  return root.next;

};