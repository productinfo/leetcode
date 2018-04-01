// @flow

class Heap {

  constructor() {
    this.q = [];
  }
  
  hasParent(i) {
    return !!this.q[this.getParentIndex(i)];
  }
  
  parent(i) {
    return this.q[this.getParentIndex(i)];
  }
  
  getParentIndex(i) {
    return ((i - 1) / 2) >> 0;
  }
  
  heapifyUp() {
    let i = this.q.length - 1;
    while (this.hasParent(i) && this.parent(i) > this.q[i]) {
      this.swap(this.getParentIndex(i), i);
      i = this.getParentIndex(i);
    }
  }
  
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  
  getRightIndex(i) {
    return 2 * i + 2;
  }
  
  hasLeft(i) {
    return !!this.q[this.getLeftIndex(i)];
  }
  
  hasRight(i) {
    return !!this.q[this.getRightIndex(i)];
  }
  
  getLeft(i) {
    return this.q[this.getLeftIndex(i)];
  }
  
  getRight(i) {
    return this.q[this.getRightIndex(i)];
  }
  
  heapifyDown() {
    let i = 0;
    while (this.hasLeft(i)) {
      let small = this.getLeftIndex(i);
      if (this.hasRight(i) && this.getRight(i) < this.getLeft(i)) {
        small = this.getRightIndex(i);
      }
      if (this.q[i] < this.q[small]) {
        break;
      } else {
        this.swap(i, small);
      }
      i = small;
    }
  }
  
  insert(v) {
    this.q.push(v);
    this.heapifyUp();
  }
  
  swap(i, j) {
    const tmp = this.q[i];
    this.q[i] = this.q[j];
    this.q[j] = tmp;
  }
  
  get() {
    if (!this.q.length) return;
    const result = this.q.shift();
    this.swap(0, this.q.length - 1);
    this.heapifyDown();
    return result;
  }
  }
