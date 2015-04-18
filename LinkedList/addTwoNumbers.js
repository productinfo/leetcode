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

    adv = Math.floor(sum / 10);

    cursor.next = new ListNode(sum % 10);

    cur = cursor.next;

    l1 = l1.next;

    l2 = l2.next;

  }

  while (l1) {

    sum = l1.val + adv;

    cursor.next = new ListNode(sum % 10);

    adv = Math.floor(sum / 10);

    l1 =l1.next;

  }

  while (l2) {

      sum = l2.val + adv;

      cursor.next = new ListNode(sum % 10);

      adv = Math.floor(sum / 10);

      l2 =l2.next;
  }

  if (adv) {
    cursor.next = new ListNode(adv);
  }

  return dummy.next;

};