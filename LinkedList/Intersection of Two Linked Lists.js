/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

  if (!headA || !headB) {
    return null;
  }

  // get length of two list
  var l1 = 0, l2 = 0;
  var c1 = headA, c2 = headB;

  while (c1) {
    l1++;
    c1 = c1.next;
  }

  while (c2) {
    l2++;
    c2 = c2.next;
  }

  var step = Math.abs(l1 - l2);
  var go;
  
  if (l1 > l2) {

    // a is longer than b
    // move l1 - l2 step first
    go = headA;
    c = headB;

  } else {
    go = headB;
    c = headA;
  }

  while (step > 0 && go) {
    go = go.next;
    step--;
  }

  // now move two list together
  while (c && go) {
    if (c.val === go.val) {
      return c;
    } else {
      c = c.next;
      go = go.next;
    }
  }

  return null;
};