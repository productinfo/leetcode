var threeSumSmaller = function (nums, target) {

  var total = 0;

  if (!nums || !target) return total;

  var len = nums.length;

  if (len === 0) return total;

  var i = 0, j , k, sum;

  nums = nums.sort(function (a, b) {
    return a - b;
  });

  for (; i < len - 2 ; i++) {

    j = i + 1;
    k = len - 1;

    while (j < k) {

      sum = nums[i] + nums[j] + nums[k];

      if (sum < target) {

        total += (k - j);
        j++;

      } else {

        while (j < k && nums[k - 1] === num[k]) k--;

      }

    }

  }

  return total;
};
