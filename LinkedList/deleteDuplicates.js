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
var deleteDuplicates = function(head) {
  
  if (!head) {
    return null;
  }

  var cur = head.next,
      pv = head;

  while (cur) {

    if (cur.val === pv.val) {

      // remove
      pv.next = cur.next;
      cur = cur.next;

    } else {

      // go next
      cur = cur.next;
      pv = pv.next;

    }

  }

  return head;

};