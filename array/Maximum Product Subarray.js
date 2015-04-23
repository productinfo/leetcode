/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

  var l = nums.length;

  if (l === 0) {
    return 0;
  }

  var min = nums[0];
  var max = nums[0];

  var tmax, tmin;

  var res = nums[0];

  for (var i = 1 ; i < l ; i++) {

    tmax = max * nums[i];
    tmin = min * nums[i];

    max = Math.max(Math.max(tmax, tmin), nums[i]);
    min = Math.min(Math.min(tmax, tmin), nums[i]);

    res = Math.max(max, res);
  }

  return res;

};