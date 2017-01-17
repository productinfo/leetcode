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

// 11/5/2016
const jump = arr => {
  let currentJumpMax = 0;
  let stepCount = 0;
  let lastJumpMax = 0;
  for (let l = arr.length, i = 0; i < l - 1; i++) {
    currentJumpMax = Math.max(currentJumpMax, arr[i] + i);
    if (i === lastJumpMax) {
    	stepCount++;
			lastJumpMax = currentJumpMax;
		}
  }
	return stepCount;
};