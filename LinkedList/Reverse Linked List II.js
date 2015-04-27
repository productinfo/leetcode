/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {

  if (!head || !head.next) {
    return head;
  }

  var prev = new ListNode(-1);

  prev.next = head;

  head = prev;

  var n1 = head;

  var k = m - 1;

  while (k > 0) {
    n1 = n1.next;
    k--;
  }

  prev = n1;

  n1 = n1.next;

  k = n - m;

  while (n1.next && k > 0) {

    var temp = n1.next;
    n1.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
    k--

  }

  return head.next;

};