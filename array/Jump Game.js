
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

// var canJump = function(nums) {

//   var l = nums.length;

//   if (l === 0) {
//     return false;
//   }

//   if (l === 1) {
//     return true;
//   }

//   var maxReach = 0;

//   for (var i = 0 ; i < l ; i++) {

//     if (i <= maxReach) {

//       maxReach = Math.max(maxReach, nums[i] + i);

//       if (maxReach >= l - 1) {
//         return true;
//       }

//     }

//   }

//   return false;

// };