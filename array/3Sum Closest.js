/**
 * @param {number[]} num
 * @param {number} target
 * @returns {number}
 */
var threeSumClosest = function (num, target) {

  var len = num.length,
      result = 0, min = Number.MAX_VALUE;

  num.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0 ; i < len - 2 ; i++) {

    var j = i + 1,
        k = len - 1;

    while (j < k) {

      var sum = num[i] + num[j] + num[k];

      var diff = Math.abs(target - sum);

      if (diff === 0) {
        return sum;
      }

      if (diff < min) {
        min = diff;
        result = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }

    }

  }

  return result;

};

// 10/3/2016
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  let result = 0;
  let min = Number.MAX_VALUE;
  nums = nums.sort((a, b) => a - b);
  for (let a = 0; a < len - 2; a++) {
    let b = a + 1;
    let c = len - 1;
    while (b < c) {
      const sum = nums[a] + nums[b] + nums[c];
      let diff = Math.abs(target - sum);
      if (diff === 0) return sum;
      if (diff < min) {
        min = diff;
        result = sum;
      }
      if (sum < target) {
        b++;
      } else {
        c--;
      }
    }
  }
  return result;
};

// 3/24/2017
const threeSumClosest = (nums, target) => {
  const len = nums.length;
  let result = 0;
  let min = Infinity;
  nums = nums.sort((a, b) => a - b);
  for (let a = 0; a < len - 2; a++) {
    let b = a + 1;
    let c = len - 1;
    while (b < c) {
      const sum = nums[a] + nums[b] + nums[c];
      const diff = Math.abs(target - sum);
      if (diff === 0) return sum;
      if (diff < min) {
        min = diff;
        result = sum;
      }
      if (sum < target) {
        b++;
      } else {
        c--;
      }
    }
  }
  return result;
};