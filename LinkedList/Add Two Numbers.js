/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){

  if (!l1 || !l2) {

    return null;

  }

  var dummy = new ListNode(-1);

  var cursor = dummy;

  var adv = 0

  while (l1 && l2) {

    var sum = l1.val + l2.val + adv;

    adv = (sum / 10) >> 0;

    cursor.next = new ListNode(sum % 10);

    cursor = cursor.next;

    l1 = l1.next;

    l2 = l2.next;

  }

  if (l1) {
    if (adv !== 0) {
      cursor.next = addTwoNumbers(l1, new ListNode(adv));
    } else {
      cursor.next = l1;
    }
  } else if (l2) {
    if (adv !== 0) {
      cursor.next = addTwoNumbers(l2, new ListNode(adv));
    } else {
      cursor.next = l2;
    }
  } else if (adv !== 0) {
    cursor.next = new ListNode(adv);
  }

  return dummy.next;

};