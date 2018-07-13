/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8

 */

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8

  */

// 2/16/2016
var addTwoNumbers = function(l1, l2) {

 if (!l1 && !l2) {
   return null;
 }

 var carry = 0, l3 = new ListNode(-1),
     c3 = l3,
     sum;

 while (l1 && l2) {

   sum = l1.val + l2.val + carry;
   c3.next = new ListNode(sum % 10);
   carry = (sum / 10) >> 0;

   c3 = c3.next;
   l1 = l1.next;
   l2 = l2.next;

 }

 while (l1) {
   sum = l1.val + carry;
   c3.next = new ListNode(sum % 10);
   carry = (sum / 10) >> 0;
   c3 = c3.next;
   l1 = l1.next;
 }

 while (l2) {
   sum = l2.val + carry;
   c3.next = new ListNode(sum % 10);
   carry = (sum / 10) >> 0;
   c3 = c3.next;
   l2 = l2.next;
 }

 if (carry) {
   c3.next = new ListNode(carry);
 }

 return l3.next;


};

// 2018/3/4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null || l2 === null) return l1 || l2;

  const dm = new ListNode(-1);
  let cur = dm;
  let carry = 0;
  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;
    cur.next = new ListNode(sum % 10);
    carry = (sum / 10) >> 0;
    l1 = l1.next;
    l2 = l2.next;
    cur = cur.next;
  }
  
  while (l1) {
    const sum = l1.val + carry;
    cur.next = new ListNode(sum % 10);
    carry = (sum / 10) >> 0;
    l1 = l1.next;
    cur = cur.next;
  }

  while (l2) {
    const sum = l2.val + carry;
    cur.next = new ListNode(sum % 10);
    carry = (sum / 10) >> 0;
    l2 = l2.next;
    cur = cur.next;
  }

  if (carry) cur.next = new ListNode(carry);

  return dm.next;
};
