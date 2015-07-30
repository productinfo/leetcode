var KthSmallestElement = function (nums, k) {

  var len = nums.length;
  
  k = k - 1;

  var go = function (start, end) {
    
    var left = start;
    var right = end;
    var pivot = start;

    while (left <= right) {

      while (left <= right && nums[left] <= nums[pivot]) {
        left++;
      }

      while (left <= right && nums[pivot] <= nums[right]) {
        right--;
      }

      if (left < right) {
        swap(nums, left, right);
        left++;
        right--;
      }
    }

    swap(nums, pivot, right);

    if (pivot === k) {
      return nums[pivot];
    } else if (pivot < k) {
      return go(pivot + 1, end);
    } else {
      return go(start, pivot - 1);
    }
  };

  return go(0, len - 1);

};

var swap = function (arr, a, b) {

  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] =tmp;

};