/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *    this.val = val;
 *    this.next = null;
 * }
 */

// time: O(n)

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

// iterate
var swapPairs = function(head) {

  var dm = new ListNode(-1);
  var k;
  dm.next = head;
  var t = dm.next;
  while (t && t.next) {
    k = t.val;
    t.val = t.next.val;
    t.next.val = k;
    t = t.next.next;
  }

  return dm.next;
};
