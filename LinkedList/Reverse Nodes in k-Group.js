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
var reverseKGroup = function(head, k) {

  if (!head || k === 1) {
    return head;
  }

  var dm = new ListNode(-1);
  dm.next = head;
  var pv = dm;
  var i = 0;

  while (head) {
    
    i++;

    if (i % k === 0) {

      // reverse
      pv = rev(pv, head.next);
      head = pv.next;

    } else {
      head = head.next;
    }

  }

  return dm.next;

};

var rev = function (start, end) {

//   if (!start || !start.next) {
//     return start;
//   }

  var c1 = start.next;
  var c2 = c1.next;

  while (c2 !== end) {

    c1.next = c2.next;
    c2.next = start.next;
    start.next = c2;
    c2 = c1.next;

  }

  return c1;

}