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
var sortList = function(head) {
  
  if (!head || !head.next) {
    return head;
  }

  // find middle point
  var fast = head,
      slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // right part
  fast = slow.next;

  // left part
  slow.next = null;

  return merge(sortList(head), sortList(fast))

};

var merge = function (left, right) {

  var r = new ListNode(-1),
      tmp = r;

  while (left && right) {

    if (left.val < right.val) {

      tmp.next = left;
      left = left.next;

    } else {

      tmp.next = right;
      right = right.next;

    }

    tmp = tmp.next;

  }

  if (left) {
    tmp.next = left;
  }

  if (right) {
    tmp.next = right;
  }

  return r.next;

};