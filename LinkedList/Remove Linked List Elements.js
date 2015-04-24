/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  if (!head) {
    return null;
  }

  var dm = new ListNode(-1);

  dm.next = head;

  var p = dm;

  while (p.next) {

    if (p.next.val === val) {
      // remove
      var t = p.next;
      p.next = t.next;
    } else {
      // move on
      p = p.next;
    }

  }

  return dm.next;

};