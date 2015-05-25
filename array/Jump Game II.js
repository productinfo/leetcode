/**
 * Greedy
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    

  var l = nums.length;

  if (l === 0) {
    return 0;
  }

  var reach = 0;
  var step = 0;
  var last = 0;

  for (var i = 0 ; i <= reach && i < l ; i++) {

    if (i > last) {
      step++;
      last = reach;
    }

    reach = Math.max(reach, nums[i] + i);

  }

  if (reach < l - 1) {
    return 0;
  }

  return step;

};