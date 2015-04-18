/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

  var dm1 = new ListNode(-1),
      dm2 = new ListNode(-1),
      pointer = head,
      c1 = dm1,
      c2 = dm2,
      tmp;

  while (pointer) {

    tmp = pointer;
    
    pointer = pointer.next;
    
    tmp.next = null;

    if (tmp.val < x) {

      // append to c1

      c1.next = tmp;
      c1 = c1.next;

    } else {

      // append to c2
      c2.next = tmp;
      c2 = c2.next;

    }

  }

  c1.next = dm2.next;

  return dm1.next;

};