/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

  if (!head) {
    return null;
  }

  var len = 1, last = head;

  while (last.next) {
    last = last.next;
    len++;
  }

  k = k % len;

  if (k === 0) {
    return head;
  }

  // cycle the linked list
  last.next = head;

  var step = len - k;

  var p = new ListNode(-1);

  p.next = head;

  while (step > 0) {
    p = p.next;
    step--;
  }

  var result = p.next;

  p.next = null;

  return result;

};

// 11/26/2016
const rotateRight = (head, k) => {
  if (!head) return null;
  let len = 1;
  let last = head;
  while (last.next) {
    last = last.next;
    len++;
  }
  k %= len;
  last.next = head;
  let step = len - k;
  const node = new ListNode(-1);
  node.next = head;
  let cur = node;
  while (step--) cur = cur.next;
  const result = cur.next;
  cur.next = null;
  return result;
};

// 3/15/2018
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let len = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  k %= len;
  cur = head;
  while (k-- && cur) {
    cur = cur.next;
  }
  let p = head;
  while (cur.next) {
    cur = cur.next;
    p = p.next;
  }
  cur.next = head;
  const res = p.next;
  p.next = null;
  return res;
};
