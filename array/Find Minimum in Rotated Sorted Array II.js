/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  var l = nums.length;

  var go = function (left, right) {

    if (left === right) {
      return nums[left];
    }

    if (right - left === 1) {
      return Math.min(nums[left], nums[right]);
    }

    var mid = (left + right) >> 1;

    if (nums[left] < nums[right]) {
      return nums[left];
    } else if (nums[left] === nums[right]) {
      // shift one
      return go(left + 1, right);
    } else if (nums[left] <= nums[mid]) {
      // go right
      return go(mid, right);
    } else {
      // go left
      return go(left, mid);
    }

  };

  return go(0, l - 1);

};

// 9/8/2016
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low < high) {
    mid = (low + high) >> 1;
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      high--;
    }
  }
  return nums[low];
};

// 11/15/2016
const findMin = arr => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    let m = (l + h) >> 1;
    if (arr[l] < arr[h]) {
      return arr[l];
    } else if (arr[l] === arr[m]) {
      l++;
    } else if (arr[l] <= arr[m]) {
      l = m + 1;
    } else {
      h = m;
    }
  }
  return arr[l];
};