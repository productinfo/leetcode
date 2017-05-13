class Solution {
  constructor(nums) {
    this.nums = nums;
    this.map = {};
    this._init();
  }

  _init() {
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] in this.map) this.map[this.nums[i]].push(i);
      else this.map[this.nums[i]] = [i];
    }
  }

  _random(arr) {
    const index = Math.random() * arr.length;
    return arr[index];
  }

  pick(target) {
    if (!(target in this.map)) return -1;
    return this._random(this.map[target]);
  }
}

// without map
class X {
  constructor(arr) {
    this.arr = arr;
  }

  pick(val) {
    let total = 0;
    let res = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === val) {
				total += 1;
				const x = (Math.random() * total) >> 0;
				res = x === 0 ? i : res;
      }
    }
		return res;
  }
}