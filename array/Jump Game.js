
/*
 * DP
 * Greedy
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {

  var l = nums.length;

  if (l === 0) {
    return false;
  }

  var reach = 0;

  for (var i = 0 ; i <= reach && i < l ; i++) {

    reach = Math.max(reach, nums[i] + i);

  }

  if (reach < l - 1) {
    return false;
  }

  return true;

};

// 3/29/2016
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

  var len = nums.length, i = 0, max = 0;

  if (len === 0 || len === 1) {
    return true;
  }

  for (; i < len; i++) {
    if (max < i) {
      return false
    }
    max = Math.max(max, nums[i] + i);
  }

  return true;
};
