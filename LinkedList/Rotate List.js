/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

  if (!head) {
    return null;
  }

  var len = 1, last = head;

  while (last.next) {
    last = last.next;
    len++;
  }

  k = k % len;

  if (k === 0) {
    return head;
  }

  // cycle the linked list
  last.next = head;

  var step = len - k;

  var p = new ListNode(-1);

  p.next = head;

  while (step > 0) {
    p = p.next;
    step--;
  }

  var result = p.next;

  p.next = null;

  return result;

};