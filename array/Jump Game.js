
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