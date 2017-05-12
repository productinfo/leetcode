// need to use heap
class RandomizedCollection {

  constructor() {
    this.map = {};
    this.arr = [];
  }

	insert(val) {
    const isExisted = val in this.map;
    if (isExisted) {
      Object.assign(this.map[val], { [this.arr.length]: true });
    } else {
      this.map[val] = { [this.arr.length]: true };
    }
    this.arr.push(val);
    return !isExisted;
  }

  remove(val) {
    if (!(val in this.map)) return false;
    const lastItem = this.arr.pop();
    delete this.map[lastItem][this.arr.length];
    if (val !== lastItem) {
      const index = Object.keys(this.map[val]).pop();
      Object.assign(this.map[lastItem], { index: true });
      this.arr[index] = lastItem;
    }
    // remove map entry if that val has been removed
    if (!Object.keys(this.map[val]).length) {
      delete this.map[val];
    }
    return true;
  }

  getRandom() {
    return this.arr[(Math.random() * this.arr.length) >> 0];
  }
}

const r = new RandomizedCollection();
console.log(r.insert(0));
console.log(r.insert(1));
console.log(r.remove(0));
// console.log(r.insert(2));
// console.log(r.remove(1));
console.log(r.arr);
console.log(r.map);
// console.log(r.getRandom());

// 4/9/2017
class RandomizedCollection {
  constructor() {
    this.arr = [];
    this.map = {}
  }

  insert(val) {
    const isExisted = val in this.map;
    if (isExisted) {
      this.map[val].push(this.arr.length);
    } else {
      this.map[val] = [this.arr.length];
    }
    this.arr.push(val);
    return !isExisted;
  }

  _swap(x, y) {
    const t = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = t;
  }

  remove(val) {
		// debugger;
    if (!(val in this.map)) return false;
    const index = this.map[val].pop();
    if (!this.map[val].length) {
        delete this.map[val];
    }
    if (index !== this.arr.length - 1) {
      const last = this.arr[this.arr.length - 1];
      this._swap(index, this.arr.length - 1);
			this.map[last] = this.map[last].sort((a, b) => a - b);
      this.map[last].pop();
			this.map[last].push(index);
    }
    this.arr.pop();
    return true;
  }
 
  getRandom() {
    return this.arr[(Math.random() * this.arr.length) >> 0];   
  }
}

// 4/18/2017
class RandomizedCollection {
  constructor() {
    this.arr = [];
    this.map = {};
  }

  insert(val) {
    let isExisted = false;
    if (val in this.map) {
      this.map[val].push(this.arr.length);
    } else {
      isExisted = true;
      this.map[val] = [this.arr.length];
    }
    this.arr.push(val);
    return isExisted;
  }

  swap(x, y) {
    const t = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = t;
  }

  // [0, 1]
  // r(0)
  // 0, 1
  // [1, 0]
  // { 0: [], 1: [1] }
  remove(val) {
    if (!(val in this.map)) return false;
    const index = this.map[val].pop();
    const last = this.arr.length - 1;
    const lastVal = this.arr[last];
    if (index !== last) {
      this.swap(index, last);
      const indexToReplace = this.map[lastVal].indexOf(last);
      this.map[lastVal].splice(indexToReplace, 1);
      this.map[lastVal].push(index);
    }
    this.arr.pop();
    if (!this.map[val].length) delete this.map[val];
    return true;
  }

  getRandom() {
    return this.arr[(Math.random() * this.arr.length) >> 0];
  }
}

// 5/6/2017
class RandomizedCollection {
  constructor() {
    this.arr = [];
    this.map = {};
  }

  insert(val) {
    if (val in this.map) {
      this.map[val].push(this.arr.length);
    } else {
      this.map[val] = [this.arr.length]
    }
    this.arr.push(val);
    return !(val in this.map);
  }

  swap(i, j) {
    const tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }

  remove(val) {
    if (val in this.map) {
      const index = this.map[val].pop();
      if (!this.map[val].length) {
        delete this.map[val];
      }
      const last = this.arr.length - 1;
      const lastVal = this.arr[last];
      if (index !== last) {
        this.swap(last, index);
        const max = Math.max(...this.map[lastVal]);
        const maxIndex = this.map[lastVal].indexOf(max);
        this.map[lastVal].splice(maxIndex, 1);
        this.map[lastVal].push(index);
      }
      this.arr.pop();
      return true;
    } else {
      return false;
    }
  }

  getRandom() {
    return this.arr[(Math.random() * this.arr.length) >> 0];
  }
}