/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {

  var dm1 = new ListNode(-1),
      dm2 = new ListNode(-1),
      pointer = head,
      c1 = dm1,
      c2 = dm2,
      tmp;

  while (pointer) {

    if (pointer.val < x) {

      // append to c1

      c1.next = new ListNode(pointer.val);
      c1 = c1.next;

    } else {

      // append to c2
      c2.next = new ListNode(pointer.val);
      c2 = c2.next;

    }

    pointer = pointer.next;

  }

  c1.next = dm2.next;

  return dm1.next;

};

// var partition = function(head, x) {

//   var dm1 = new ListNode(-1),
//       dm2 = new ListNode(-1),
//       pointer = head,
//       c1 = dm1,
//       c2 = dm2,
//       tmp;

//   while (pointer) {

//     tmp = pointer;

//     pointer = pointer.next;

//     tmp.next = null;

//     if (tmp.val < x) {

//       // append to c1

//       c1.next = tmp;
//       c1 = c1.next;

//     } else {

//       // append to c2
//       c2.next = tmp;
//       c2 = c2.next;

//     }

//   }

//   c1.next = dm2.next;

//   return dm1.next;

// };

var partition = function(head, x) {

  var dm1 = new ListNode(-1),
      dm2 = new ListNode(-1),
      c1 = dm1,
      c2 = dm2

  while (head) {

    if (head.val < x) {

      // append to c1

      c1.next = new ListNode(head.val);
      c1 = c1.next;

    } else {

      // append to c2
      c2.next = new ListNode(head.val);
      c2 = c2.next;

    }

    head = head.next;

  }

  c1.next = dm2.next;

  return dm1.next;

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

  if (!head || !head.next) return head;

  const dm1 = new ListNode(-1);
  const dm2 = new ListNode(-1);
  let cur1 = dm1;
  let cur2 = dm2;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      cur1.next = new ListNode(cur.val);
      cur1 = cur1.next;
    } else {
      cur2.next = new ListNode(cur.val);
      cur2 = cur2.next;
    }
    cur = cur.next;
  }

  cur1.next = dm2.next;
  return dm1.next;
};
