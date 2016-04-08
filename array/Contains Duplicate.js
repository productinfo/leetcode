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
