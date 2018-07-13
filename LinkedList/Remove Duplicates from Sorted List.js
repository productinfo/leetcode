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
var deleteDuplicates = function(head) {
  
  if (!head) {
    return null;
  }

  var cur = head.next,
      pv = head;

  while (cur) {

    if (cur.val === pv.val) {

      // remove
      pv.next = cur.next;

    } else {

      // go next
      pv = pv.next;

    }
    
    cur = cur.next;

  }

  return head;

};

// 11/27/2016
const deleteDuplicates = head => {
  if (!head || !head.next) return head;
  let pv = head;
  let cur = head.next;
  while (cur) {
    if (pv.val === cur.val) {
      pv.next = cur.next;
    } else {
      pv = pv.next;
    }
    cur = cur.next;
  }
  return head;
};

// 3/24/2018
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let pv = head;
  let cur = head.next;
  while (cur) {
    if (cur.val === pv.val) {
      pv.next = cur.next;
    } else {
      pv = cur;
    }
    cur = cur.next;
  }
  return head;
};
