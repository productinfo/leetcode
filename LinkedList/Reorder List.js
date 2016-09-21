/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify the linked list in-place instead.
 */
var reorderList = function(head) {

  // 1. cut list into half
  // 2. reverse sec half
  // 3. merge

  if (!head || !head.next) {
    return
  }

  var slow = head, fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var mid = slow.next;

  // reverse
  fast = mid;
  var pv = null;
  var tmp;

  while (fast) {
    tmp = fast.next;
    fast.next = pv;
    pv = fast;
    fast = tmp;
  }

  slow.next = null;

  // merge
  while (head && pv) {

    tmp = head.next;
    head.next = pv;
    pv = pv.next;
    head.next.next = tmp;
    head = tmp;
  }


};

// 9/4/2016
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify the linked list in-place instead.
 */
var reorderList = function(head) {

  // 1. cut list into half
  // 2. reverse sec half
  // 3. merge

  if (!head || !head.next) {
    return
  }

  var slow = head, fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var mid = slow.next;

  // reverse
  fast = mid;
  var pv = null;
  var tmp;

  while (fast) {
    tmp = fast.next;
    fast.next = pv;
    pv = fast;
    fast = tmp;
  }

  slow.next = null;

  // merge
  while (head && pv) {
    tmp = pv.next;
    pv.next = head.next;
    head.next = pv;
    head = pv.next;
    pv = tmp;
  }


};
