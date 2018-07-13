class ZigzagIterator {
  constructor(v1, v2) {
    const q = [];
    const tmp = [v1, v2];
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i][0] !== undefined) {
        q.push({
          value: tmp[i][0],
          index: 0,
          pos: i
        });
      }
    }
    this.q = q;
    this.tmp = tmp;
  }

  hasNext() {
    return this.q.length > 0;
  }

  next() {
    const node = this.q.shift();
    if (node) {
      const { value, pos, index } = node;
      if (this.tmp[pos][index + 1]) {
        this.q.push({
          value: this.tmp[pos][index + 1],
          pos,
          index: index + 1
        });
      }
      return value;
    } else {
      return null;
    }
  }
}

// 4/26/2018
class ZigzagIterator {
  constructor(v1, v2) {
    this.v = [v1, v2];
    this.q = [];
    for (let i = 0; i < this.v.length; i++) {
      if (this.v[i].length) {
        this.q.push({
          v: this.v[i].shift(),
          i
        })
      }
    }
  }

  hasNext() {
    return this.q.length > 0;
  }

  next() {
    const node = this.q.shift();
    if (this.v[node.i].length) {
      const v = this.v[node.i].shift();
      this.q.push({ v, i: node.i });
    }
    return node.v;
  }
}
