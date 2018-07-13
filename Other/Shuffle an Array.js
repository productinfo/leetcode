class Solution {
  
  constructor(arr) {
    this.arr = arr;
  }

  reset() {
    return this.arr;
  }

  shuffle() {
    const copy = this.arr.slice();
    let len = copy.length;
    while (len) {
      const index = (Math.random() * len--) >> 0;
      const tmp = copy[len];
      copy[len] = copy[index];
      copy[index] = tmp;
    }
    return copy;
  }
}