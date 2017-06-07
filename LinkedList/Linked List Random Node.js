class Solution {
  constructor(head) {
     this.head = head;
  }
  getRandom() {
    let cur = this.head;
    let res = cur.val;
    let count = 1;
    while (cur.next) {
      cur = cur.next;
      if (Math.floor(Math.random() * (count + 1)) === count) {
        res = cur.val;
      }
      count++;
    }
    return res;
  }
}