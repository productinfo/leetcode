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
      total = nums[i];
    }

    if (total > max) {
      max = total;
    }

  }

  return max;

};

// 3/29/2016
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var len = nums.length;
  var sum = 0;
  var max = Number.NEGATIVE_INFINITY;
  var t;

  while (len--) {
	  t = nums[len];
    sum += t;
    if (sum < t) {
      sum = t;
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
