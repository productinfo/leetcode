/*
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

For example, given nums = [-2, 0, 1, 3], and target = 2.

Return 2. Because there are two triplets which sums are less than 2:

[-2, 0, 1]
[-2, 0, 3]
Follow up:
Could you solve it in O(n^2) runtime?
*/

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
