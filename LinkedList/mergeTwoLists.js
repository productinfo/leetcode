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
var mergeTwoLists = function(l1, l2) {

  var root = new ListNode(0),
      result = root;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;
    }

    result = result.next;
  }

  if (l1) {
    result.next = l1;
  } else {
    result.next = l2;
  }

  return root.next;

};