/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {

  var l = nums.length;

  var min = nums[0], max = nums[0];

  var i;

  for (i = 0 ; i < l ; i++) {

    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }

  }

  var gap = Math.round((max - min) / (l - 1));

  var mins = [], maxs = [];

  for (i = 0 ; i < l ; i++) {
    mins.push(Number.MAX_VALUE);
    maxs.push(Number.MIN_VALUE);
  }

  for (i = 0 ; i < l ; i++) {
    if (i === min || i === max) {
      continue;
    }

    var index = ((i - min) / gap) >> 0;

    mins[index] = Math.min(nums[i], mins[index]);
    maxs[index] = Math.max(nums[i], maxs[index]);
  }

  var ret = Number.MIN_VALUE;

  var pv = min;

  for (i = 0 ; i < l ; i++) {
    if (mins[i] === Number.MAX_VALUE && maxs[i] === Number.MIN_VALUE) {
      continue;
    }

    ret = Math.max(ret, mins[i] - pv);
    pv = maxs[i];
  }

  ret = Math.max(ret, max - pv);
  return ret;
};