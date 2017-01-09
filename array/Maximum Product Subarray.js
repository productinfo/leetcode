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

// 9/10/2016
var maxProduct = function(nums) {
  const len = nums.length;
  if (!len) return 0;
  let res = nums[0];
  let max = nums[0];
  let min = nums[0];
  let tmax, tmin;
  for (let i = 1; i < len; i++) {
    tmax = max * nums[i];
    tmin = min * nums[i];
    max = Math.max(nums[i], tmax, tmin);
    min = Math.min(nums[i], tmax, tmin);
    res = Math.max(res, max);
  }
  return res;
};

// 11/29/2016
const maxProduct = arr => {
  let max = arr[0];
  let mx = arr[0];
  let mn = arr[0];
  let tmax;
  let tmin;
  for (let l = arr.length, i = 1; i < l; i++) {
    tmax = mx * arr[i];
    tmin = mn * arr[i];
    mx = Math.max(tmax, tmin, arr[i]);
    mn = Math.min(tmax, tmin, arr[i]);
    max = Math.max(max, mx, mn);
  }
  return max;
};
