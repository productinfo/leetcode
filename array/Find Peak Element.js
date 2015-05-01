
/**
 * binary search
 * O(nlogn)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
  var l = nums.length;

  if (l < 2) {
    return 0;
  }

  var low = 0,
      high = l - 1,
      mid;

  while (low <= high) {

    mid = (low + high) >> 1;

    if (
      (mid === 0 || nums[mid] > nums[mid - 1]) && (mid === l - 1 || nums[mid] > nums[mid + 1])
      ) {
      return mid;
    } else if (mid > 0 && nums[mid] < nums[mid - 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

  return mid;


};