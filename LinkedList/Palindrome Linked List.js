/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

  if (!head || !head.next) return true;

  var slow = head, fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = slow.next;

  slow.next = null;

  var r = rev(fast);

  slow = head;

  while (slow && r) {
    if (slow.val !== r.val) return false;
    slow = slow.next;
    r = r.next;
  }

  return true;

};

var rev = function (head) {

  if (!head) return null;

  var pv = null, cur = head, tmp;

  while (cur) {

    tmp = cur.next;

    cur.next = pv;

    pv = cur;

    cur = tmp;

  }

  return pv;

};
