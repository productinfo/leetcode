/**
add(1);
add(3);
add(5);
find(4) -> true
find(7) -> false
 */

class TwoSum {

  constructor() {
    this._map = {};
  }

  add(n) {
    if (this._map.hasOwnProperty(n)) {
      this._map[n]++;
    } else {
      this._map[n] = 1;
    }
  }

  find(target) {
    for (let k in this._map) {
      const offset = target - k;
      if (
        (k === offset && this._map[k] > 1) ||
        (k !== offset && this._map.hasOwnProperty(offset))
      ) {
        return true;
      }
    }
    return false;
  }

}

/**
 * find is O(1)
 * add is O(n)
 */
class X {
  constructor() {
    this.map = {};
    this.total = {};
  }
  add(val) {
    Object.keys(this.map).forEach(key => {
      key = +key;
      this.total[val + key] = true;
    });
    this.map[val] = true;
  }
  find(val) {
    return val in this.total;
  }
}