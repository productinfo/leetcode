/**
 * @param {number[]} num
 * @param {number} target
 * @returns {number[][]}
 */
var fourSum = function(num, target) {

  var len = num.length;

  if (len < 4) {
    return [[]];
  }

  var result = [], a, b, c, d;

  num.sort(function (a, b) {
    return a - b;
  });

  for (a = 0; a < len - 3 ; a++) {

    if (a > 0 && num[a] === num[a - 1]) {
      continue;
    }

    for (b = a + 1 ; b < len - 2 ; b++) {

      if (b > a + 1 && num[b] === num[b - 1]) {
        continue;
      }

      c = b + 1;
      d = len - 1;

      while (c < d) {

        if (c > b + 1 && num[c] === num[c - 1]) {
          c++;
          continue;
        }

        var sum = num[a] + num[b] + num[c] + num[d];

        if (sum === target) {
          result.push([num[a], num[b], num[c], num[d]]);
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }

      }

    }

  }

  return result;

};

// 3/18/2017
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var r = [];
  var len = nums.length;

  if (len < 4) {
    return r;
  }

  nums = nums.sort(function (a, b) {
    return a - b;
  });

  var a, b, c, d, sum;

  for (a = 0; a < len - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    for (b = a + 1; b < len - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;

      c = b + 1;
      d = len - 1;

      while (c < d) {
        sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          r.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) {
            c++;
          }
          while(c < d && nums[d] === nums[d - 1]) {
            d--;
          }
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }

  }

  return r;
};

// 9/5/2016
const fourSum = (nums, target) => {
  const res = [];
  const len = nums.length;
  if (!len) return res;

  nums = nums.sort((a, b) => a - b);

  for (let a = 0; a < len - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < len - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1;
      let d = len - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (target === sum) {
          res.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return res;
};
