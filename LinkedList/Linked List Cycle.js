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
var hasCycle = function(head) {

  if (!head) {
    return false;
  }

  var fast = head, slow = head;

  while (fast && slow && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
};

// 9/4/2016
var hasCycle = function(head) {

  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;

};

// 10/23/2016
const hasCycle = head => {
  if (!head || !head.next) return false;
  let s = head;
  let f = head;
  while (f.next && f.next.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }
  return false;
};
