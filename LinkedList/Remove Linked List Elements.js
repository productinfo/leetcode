/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  if (!head) {
    return null;
  }

  var dm = new ListNode(-1);

  dm.next = head;

  var p = dm;

  while (p.next) {

    if (p.next.val === val) {
      // remove
      var t = p.next;
      p.next = t.next;
    } else {
      // move on
      p = p.next;
    }

  }

  return dm.next;

};

// 4/28/2016
var removeElements = function(head, val) {

  if (!head) return null;

  var dm = new ListNode(-1);

  dm.next = head;

  var p = dm;

  while (p.next) {

    if (p.next.val === val) {
      // remove
      // var t = p.next;
      p.next = p.next.next;
    } else {
      // move on
      p = p.next;
    }

  }

  return dm.next;

};

// 11/19/2016
const removeElements = (head, val) => {
  if (!head) return head;
  const node = new ListNode(-1);
  node.next = head;
  let cur = node;
  while (cur) {
    if (cur.next && cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return node.next;
};