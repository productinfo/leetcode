
// iterate

var rev = function (head) {

  var cur = head, pv = null, tmp;

  while (cur) {

    tmp = cur;
    cur.next = pv;
    pv = cur;
    cur = tmp;

  }

  head = pv;
  return head;

};
