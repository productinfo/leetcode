var swap = function (arr, a, b) {
  var t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
};

var partion = function (nums, start, end) {

  var pivot = start, tmp;

  while (start <= end) {

    while (start <= end && nums[start] <= nums[pivot]) {
      start++;
    }

    while (start <= end && nums[pivot] < nums[end]) {
      end--;
    }

    if (start > end) {
      break;
    }

    swap(nums, start, end);

  }

  swap(nums, pivot, end);

  return end;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  var start = 0,
      len = nums.length,
      end = len - 1,
      index = len - k,
      pivot;

  while (start < end) {

    pivot = partion(nums, start, end);

    if (pivot < index) {
      start = pivot + 1;
    } else if (pivot > index) {
      end = pivot - 1;
    } else {
      return nums[pivot];
    }

  }

  return nums[start];

};