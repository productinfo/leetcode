/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var binary = function (left, right) {

    if (left === right || nums[left] < nums[right]) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = (left + right) >> 1;

    if (nums[mid] > nums[left]) {
      // go right
      return binary(mid, right);
    } else {
      // go left
      return binary(left, mid);
    }

  };

  return binary(0, nums.length - 1);

};

var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    if (nums[low] < nums[high]) {
      return nums[low];
    }
    let m = (low + high) >> 1;
    if (nums[low] <= nums[m]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
};

// 10/23/2016
const findMin = arr => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    if (arr[l] < arr[h]) return arr[l];
    let m = (l + h) >> 1;
    if (arr[h] < arr[m]) {
      l = m + 1;
    } else {
      h = m;
    }
  }
  return arr[l];
};