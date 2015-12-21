

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  if (!nums) return 0;

  var len = nums.length;

  if (len < 2) return 0;

  var helper = function (from, to) {

    if (to - from === 1) return nums[from] > nums[to] ? from : to;

    var mid = (from + to) >> 1,
        l = helper(from, mid),
        r = helper(mid, to);

    if (nums[l] > nums[r]) return l;
    else return r;

  }

  return helper(0, len - 1);

};
