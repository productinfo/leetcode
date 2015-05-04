/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *    this.val = val;
 *    this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
var swapPairs = function(head) {

  if (!head || !head.next) {
      return head;
  } else {

    var list = swapPairs(head.next.next);

    var temp = head.next;

    temp.next = head;

    head.next = list;

    return temp;
  }

};