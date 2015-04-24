function ListNode (val) {
  this.val = val;
  this.next = null;
}

// iterate
var iter = function (head) {

  if (!head) {
    return head;
  }

  var pv = null;
  var cur = head;
  var tmp;

  while (cur) {

    tmp = cur.next;

    cur.next = pv;

    pv = cur;

    cur = tmp;

  }

  return pv;
};

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

// recursive
var rec = function (head) {

  var first, rest;

  if (!head) {
    return;
  }

  first = head;
  rest = first.next;

  if (!rest) {
    return;
  }

  rec(rest);
  first.next.next = first;

  first.next = null;

  head = rest;

  console.log(head);

};