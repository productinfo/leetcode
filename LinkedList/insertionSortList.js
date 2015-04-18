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
var insertionSortList = function(head) {
  
  if (!head || !head.next) {
    return head;
  }

  var result = new ListNode(-1);

  result.next = head;
  
  var cursor = head;

  while (cursor && cursor.next) {

    if (cursor.val > cursor.next.val) {

      // not in order
      var small = cursor.next;

      var pre = result;

      // find position to insert node
      while (pre.next.val < small.val) {
        pre = pre.next;
      }

      // swap node
      var tmp = pre.next;

      pre.next = small;

      cursor.next = small.next;

      small.next = tmp;


      // cursor.next = small.next;

      // small.next = pre.next;

      // pre.next = small;

    } else {
      // continue;
      cursor = cursor.next;
    }


  }

  return result.next;
};