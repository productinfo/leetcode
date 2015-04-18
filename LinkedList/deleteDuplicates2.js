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

  if (!head || !head.next) {
      return head;
  }

  var dm = new ListNode(-1),
      pp,
      p1 = head,
      p2 = head,
      dup = false;

  // dm.next = head;
  pp = dm;

  while (p2.next) {

    p2 = p2.next;

    if (p1.val === p2.val) {
      dup = true;
    } else {

      if (dup) {
        dup = false;
      } else {

        pp.next = p1;
        pp = pp.next;

      }

      p1 = p2;

    }

  }

  if (!dup) {

    pp.next = p1;
    pp = pp.next;

  }

  pp.next = null;

  return dm.next;

};