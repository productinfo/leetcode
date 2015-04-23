// can ignore previous sub-sum if the sub-sum is smaller than the current element

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  var l = nums.length;

  var i = 0;

  var max = Number.NEGATIVE_INFINITY;

  var total = 0;

  for (; i < l ; i++) {

    total += nums[i];

    if (total < nums[i]) {
      total = nums[i]
    }

    if (total > max) {
      max = total;
    }

  }

  return max;

};