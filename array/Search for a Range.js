/**
 * @param {number[]} A
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(A, target) {

  var low = 0, high = A.length - 1, mid;

  while (low <= high) {

    mid = (low + high) >> 1;

    if (target === A[mid]) {
      // return mid;

      var left = mid, right = mid;

      while (left >= 0 && A[left] === target) {
        left--;
      }

      while (right < A.length && A[right] === target) {
        right++;
      }

      return [left + 1, right - 1];

    } else if (target > A[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }

  return [-1, -1];

};

// 9/12/2016
var searchRange = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (nums[mid] === target) {
      let i = mid;
      let j = mid;
      while (i >= 0 &&  nums[i] === target) {
        i--;
      }
      while (j < nums.length && nums[j] === target) {
        j++;
      }
      return [i + 1, j - 1];
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [-1, -1];
};

// 10/7/2016
var searchRange = function(nums, target) {
  const len = nums.length;
  if (!len) return [-1, -1];
  let l = 0;
  let h = len - 1;
  while (l <= h) {
    let m = (l + h) >> 1;
    if (nums[m] === target) {
      let i = m;
      let j = m;
      while (i >= 0 && nums[i] === nums[m]) i--;
      while (j < len && nums[j] === nums[m]) j++;
      return [i + 1, j - 1];
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return [-1, -1];
};

// 10/21/2016
const searchRange = (arr, target) => {
  const noResult = [-1, -1];
  if (!arr || target === undefined || !Array.isArray(arr)) return noResult;
  const len = arr.length;
  if (!len) return noResult;
  let l = 0;
  let h = len - 1;
  while (l <= h) {
    let m = (l + h) >> 1;
    if (arr[m] === target) {
      let i = m;
      let j = m;
      while (i >= 0 && arr[i] === target) i--;
      while (j < len && arr[j] === target) j++;
      return [i + 1, j - 1];
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return noResult;
};
