var plusOne = function(head) {
  if (!head) return null;
  let carry = 1;
  const tmp = [];
  let cur = head;
  while (cur) {
    tmp.push(cur.val);
    cur = cur.next;
  }
  const dm = new ListNode(-1);
  cur = dm;
  for (let j = tmp.length - 1; j >= 0; j--) {
    const d = tmp[j] + carry;
    tmp[j] = d % 10;
    carry = (d / 10) | 0;
  }
  if (carry) tmp.unshift(carry);
  for (const v of tmp) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dm.next;
};

// 
const rev = head => {
  if (!head || !head.next) return head;
  let pv = null;
  let cur = head;
  while (cur) {
    const t = cur.next;
    cur.next = pv;
    pv = cur;
    cur = t;
  }
  return pv;
};

 var plusOne = function(head) {
  if (!head) return null;
  let carry = 1;
  const h = rev(head);
  const dm = new ListNode(-1);
  dm.next = h;
  let cur = dm;
  while (cur.next) {
    cur = cur.next;
    carry += cur.val;
    cur.val = carry % 10
    carry = (carry / 10) | 0;
  }
  if (carry) cur.next = new ListNode(carry);
  return rev(dm.next);
};
