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
