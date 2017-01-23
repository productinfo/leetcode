/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if (!nums) {
        return false;
    }

    var len = nums.length;

    if (len === 0) {
        return false;
    }

    var i = 0, map = {};

    for (; i < len ; i++) {

        if (map.hasOwnProperty(nums[i])) {
            return true;
        }

        map[nums[i]] = true;

    }

    return false;

};

// 4/7/2016
const containsDuplicate = (n) => {

  let len = n.length;
  const map = {};

  while (len--) {
    if (map[n[len]]) {
      return true;
    } else {
      map[n[len]] = true;
    }
  }

  return false;
};

// 11/20/2016
const containsDuplicate = arr => {
  // sort
  // O(nlog)
  // no extra space
  arr = arr.sort((a, b) => a - b);
  for (let l = arr.length, i = 1; i < l; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
  return false;
};

const containsDuplicate = arr => {
  // use map extra space
  // O(n)
  const map = {};
  for (let l = arr.length, i = 0; i < l; i++) {
    if (arr[i] in map) return true;
    map[arr[i]] = i;
  }
  return false;
};

// 11/30/2016
const containsDuplicate = arr => {
  const l = arr.length;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < l; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) return true;
  }
  return false;
};