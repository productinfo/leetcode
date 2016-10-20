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

  while (step-- && go) {
    go = go.next;
  }

  // now move two list together
  while (c && go) {

    if (c.val === go.val) {
      return c;
    }

    c = c.next;
    go = go.next;
  }

  return null;
};

// 10/6/2016
const getIntersectionNode = (h1, h2) => {
  let l1 = 0;
  let l2 = 0;
  let c1 = h1;
  let c2 = h2;
  while (c1) {
    l1++;
    c1 = c1.next;
  }
  while (c2) {
    l2++;
    c2 = c2.next;
  }
  let p1;
  let p2;
  if (l1 > l2) {
    p1 = h1;
    p2 = h2;
  } else {
    p1 = h2;
    p2 = h1;
  }
  let step = Math.abs(l1 - l2);
  while (step--) {
    p1 = p1.next;
  }
  while (p1 && p2) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return null;
};
