class RandomizedSet {

  constructor() {
    this.map = {};
  }

  insert(val) {
    if (val in this.map) return false;
    else {
      this.map[val] = true;
      return true;
    }
  }

  remove(val) {
    if (val in this.map) {
      delete this.map[val];
      return true;
    } else {
      return false;
    }
  }

  getRandom() {
		const i = (Math.random() * Object.keys(this.map).length) >> 0;
		return +Object.keys(this.map)[i];
  }
}

// 4/9/2017
class RandomizedSet {
  constructor() {
    this.map = {};
    this.arr = [];
  }

  insert(val) {
    if (val in this.map) return false;
    else {
      this.map[val] = this.arr.length;
      this.arr.push(val);
      return true;
    }
  }

  _swap(x, y) {
    const t = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = t;
  }

  remove(val) {
    if (val in this.map) {
      const index = this.map[val];
      if (index < this.arr.length - 1) {
        const last = this.arr[this.arr.length - 1];
        this._swap(index, this.arr.length - 1);
        this.map[last] = index;
      }
      this.arr.pop();
      delete this.map[val];
      return true;
    } else return false;
  }
 
  getRandom() {
    const index = (Math.random() * this.arr.length) >> 0;
    return this.arr[index];
  }
}

// 4/18/2017
class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = {};
  }

  insert(val) {
    if (val in this.map) return false;
    else {
      this.map[val] = this.arr.length;
      this.arr.push(val);
      return true;
    }
  }

  swap(x, y) {
    const t = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = t;
  }

  remove(val) {
    if (val in this.map) {
      const index = this.map[val];
      const last = this.arr.length - 1;
      const lastVal = this.arr[last];
      this.swap(index, last);
      this.arr.pop();
      this.map[lastVal] = index;
      delete this.map[val];
      return true;
    } else return false;
  }

  getRandom() {
    return this.arr[(Math.random() * this.arr.length) >> 0];
  }
}