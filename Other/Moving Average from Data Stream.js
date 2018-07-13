class MovingAverage {
  constructor(size) {
    this.q = [];
    this.size = size;
  }

  sum(arr) {
    return arr.reduce((t, v) => t + v, 0);
  }

  next(val) {
    if (this.q.length >= this.size) {
      this.q.shift();
    }
    this.q.push(val);
    if (!this.q.length) return val;
    return (this.sum(this.q) / this.q.length);
  }
}

class MovingAverage {
  constructor(size) {
    this.w = Array.from(Array(size), _ => 0);
    this.insert = 0;
    this.sum = 0;
    this.n = 0;
  }

  next(val) {
    if (this.n < this.w.length) this.n++;
    this.sum -= this.w[this.insert];
    this.sum += val;
    this.w[this.insert] = val;
    this.insert = (this.insert + 1) % this.w.length;
    return this.sum / this.n;
  }
}

// 4/26/2018
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.tmp = [];
    this.total = 0;
  }

  next(v) {
    this.tmp[this.total++ % this.size] = v;
    return this.tmp.reduce((t, v) => t + v, 0) / this.tmp.length;
  }
}
