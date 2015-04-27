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
var detectCycle = function(head) {
  if (!head) {
    return null;
  }

  var fast = head, slow = head, flag = false;

  while (fast && slow && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      flag = true;
      break;
    }
  }

  if (flag) {
    
    slow = head;
    
    while (slow != fast) {

      slow = slow.next;
      fast = fast.next;

    }

    return slow;

  }

  return null;
};