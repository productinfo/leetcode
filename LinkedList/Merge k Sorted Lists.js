/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// time O(nklog(k)) space O(nk)

/**
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
var mergeKLists = function(lists) {

  var i = 1, len = lists.length, tmp;

  if (len === 0) {
    return null;
  }

  tmp = lists[0];

  // looping and doing merge sort
  for (; i < len ; i++) {

    tmp = mergesort(tmp, lists[i]);

  }

  return tmp;

};

var mergesort = function (l1, l2) {

  var head = new ListNode(-1),
      p = head;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1) {
    p.next = l1;
  }

  if (l2) {
    p.next = l2;
  }

  return head.next;
};