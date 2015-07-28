var maxCircularSum = function (nums) {

  if (!nums) {
    return 0;
  }

  var len = nums.length;

  if (len === 0) {
    return 0;
  }

  var max = maxSubArr(nums);

  

};

var maxSubArr = function (nums) {

  if (!nums) {
    return 0;
  }

  var len = nums.length;

  if (len === 0) {
    return 0;
  }

  var i = 0, max = Number.NEGATIVE_INFINITY,
      sum = 0;

  for (; i < len ; i++) {

    sum += nums[i];

    if (sum < nums[i]) {
      sum = nums[i];
    }

    if (sum > max) {
      max = sum;
    }

  }

  return max;

};