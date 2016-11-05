/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// time O(nklog(k)) space O(nk)

/**
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKLists = function(lists) {

  const len = lists.length;
  if (!len) {
    return null;
  }

  if (len === 1) {
    return lists[0];
  } else {
    return mergesort(mergeKLists(lists.slice(0, len >> 1)), mergeKLists(lists.slice(len >> 1)));
  }

};

const mergesort = function (l1, l2) {

  const head = new ListNode(-1);
  let p = head;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1) {
    p.next = l1;
  }

  if (l2) {
    p.next = l2;
  }

  return head.next;
};

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

/**
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
var mergeKLists = function(lists) {

  var i = 1, len = lists.length, tmp;

  if (len === 0) {
    return null;
  }

  tmp = lists[0];

  // looping and doing merge sort
  for (; i < len ; i++) {

    tmp = mergesort(tmp, lists[i]);

  }

  return tmp;

};

var mergesort = function (l1, l2) {

  var head = new ListNode(-1),
      p = head;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1) {
    p.next = l1;
  }

  if (l2) {
    p.next = l2;
  }

  return head.next;
};

// 11/4/2016
const mergeKLists = lists => {
  const len = lists.length;
  if (len === 0) {
    return [];
  } else if (len === 1) {
    return lists[0];
  } else {
    return merge(mergeKLists(lists.slice(0, len >> 1)), mergeKLists(lists.slice(len >> 1)));
  }
};

const merge = (l1, l2) => {
  const l3 = new ListNode(-1);
  let cur = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) {
    cur.next = l1;
  } else if (l2) {
    cur.next = l2;
  }
  return l3.next;
};
