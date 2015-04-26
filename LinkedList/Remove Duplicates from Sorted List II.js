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

  if (!head || !head.next) {
      return head;
  }

  var dm = new ListNode(-1);

  dm.next = head;

  var prev = dm;
  var cur = head;

  while (cur) {

    while (cur.next && prev.next.val === cur.next.val) {
      cur = cur.next;
    }

    if (prev.next === cur) {
      prev = prev.next;
    } else {
      prev.next =cur.next;
    }

    cur = cur.next;
  }

  return dm.next;
};

// var deleteDuplicates = function(head) {

//   if (!head || !head.next) {
//       return head;
//   }

//   var dm = new ListNode(-1),
//       pp,
//       p1 = head,
//       p2 = head,
//       dup = false;

//   // dm.next = head;
//   pp = dm;

//   while (p2.next) {

//     p2 = p2.next;

//     if (p1.val === p2.val) {
//       dup = true;
//     } else {

//       if (dup) {
//         dup = false;
//       } else {

//         pp.next = p1;
//         pp = pp.next;

//       }

//       p1 = p2;

//     }

//   }

//   if (!dup) {

//     pp.next = p1;
//     pp = pp.next;

//   }

//   pp.next = null;

//   return dm.next;

// };