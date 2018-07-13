class MedianFinder {
  constructor() {
    this.max = [];
    this.min = [];
  }

  _increasing(a, b) {
    return a - b;
  }

  _decreasing(a, b) {
    return b - a;
  }

  addNum(n) {
    this.max.push(n);
    this.max.sort(this._decreasing);
    this.min.push(this.max.shift());
    this.min.sort(this._increasing);
    if (this.max.length < this.min.length) {
      this.max.push(this.min.shift());
      this.min.sort(this._increasing);
      this.max.sort(this._decreasing);
    }
  }

  findMedian() {
    return this.max.length === this.min.length
      ? (this.max[0] + this.min[0]) / 2
      : this.max[0]
  }
}
