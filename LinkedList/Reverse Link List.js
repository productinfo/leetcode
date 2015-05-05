/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
  if (!head || !head.next) {
      return head;
  }
    
  var cur = head, pv = null, tmp;

  while (cur) {

    tmp = cur.next;
    cur.next = pv;
    pv = cur;
    cur = tmp;

  }

  head = pv;
  return head;
};