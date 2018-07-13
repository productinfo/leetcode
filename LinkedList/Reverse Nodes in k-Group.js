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
var reverseKGroup = function(head, k) {

  if (!head || k === 1) {
    return head;
  }

  var dm = new ListNode(-1);
  dm.next = head;
  var pv = dm;
  var i = 0;

  while (head) {
    
    i++;

    if (i % k === 0) {

      // reverse
      pv = rev(pv, head.next);
      head = pv.next;

    } else {
      head = head.next;
    }

  }

  return dm.next;

};

var rev = function (start, end) {

//   if (!start || !start.next) {
//     return start;
//   }

  var c1 = start.next;
  var c2 = c1.next;

  while (c2 !== end) {

    c1.next = c2.next;
    c2.next = start.next;
    start.next = c2;
    c2 = c1.next;

  }

  return c1;

}

// 3/29/2017
const reverseKGroup = (head, k) => {
  if (!head || !head.next) return head;
  let cur = head;
  let count = 0;
  while (cur && count !== k) {
    cur = cur.next;
    count++;
  }
  // console.log(count);
  if (count === k) {
    cur = reverseKGroup(cur, k);
    while (count-- > 0) {
      const t = head.next;
      head.next = cur;
      cur = head;
      head = t;
    }
    head = cur;
  }
  return head;
};

// 4/13/2017
// time: O(n)
const reverseKGroup = (head, k) => {
  if (!head || !head.next) return head;
  let cur = head;
  let count = 0;
  while (cur && count !== k) {
    cur = cur.next;
    count += 1;
  }
  // console.log(count);
  if (count === k) {
    cur = reverseKGroup(cur, k);
    while (count-- > 0) {
      const t = head.next;
      head.next = cur;
      cur = head;
      head = t;
    }
    return cur;
  } else {
    return head;
  }
};

// 6/13/2017
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
var reverseKGroup = function(head, t) {
  if (!head || !head.next) return head;
  let cur = head;
  let k = t;
  while (cur && k) {
    cur = cur.next;
    k--;
  }
  if (k === 0) {
    cur = reverseKGroup(cur, t);
    while (t--) {
      const next = head.next;
      head.next = cur;
      cur = head;
      head = next;  
    }
    return cur;
  } else {
    return head;
  }
};