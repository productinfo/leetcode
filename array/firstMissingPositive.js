/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
  var i = 0,
      len = nums.length;

  if (len === 0) {
      return 1;
  }

  for (; i < len ; i++) {

    if (nums[i] > 0
      && nums[i] - 1 < len
      && nums[i] !== i + 1
      && nums[i] !== nums[nums[i] - 1]
       ) {
      swap(nums, i, nums[i] - 1);
    }

  }

  for (i = 0 ; i < len ; i++) {

    if (nums[i] !== i + 1) {
      return i + 1;
    }

  }

  return len + 1;

};

var swap = function (arr, x, y) {

  var tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;

};