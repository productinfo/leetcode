

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  if (!nums) return 0;

  var len = nums.length;

  if (len < 2) return 0;

  var helper = function (from, to) {

    if (to - from === 1) return nums[from] > nums[to] ? from : to;

    var mid = (from + to) >> 1,
        l = helper(from, mid),
        r = helper(mid, to);

    if (nums[l] > nums[r]) return l;
    else return r;

  }

  return helper(0, len - 1);

};

// 4/6/2016
const findPeakElement = (n) => {

  let low = 0, high = n.length - 1;

  while (low < high) {

    const m = (low + high) >> 1;

    if (n[m] > n[m + 1]) {
      high = m;
    } else if (n[m] < n[m + 1]) {
      low = m + 1;
    }
  }

  return low;

};

// 5/10
const go = (arr, l, h) => {
  if (l === h) return l;
  if (l + 1 === h) return arr[l] < arr[h] ? h : l;
  const m = (l + h) >> 1;
  if (arr[m - 1] < arr[m] && arr[m + 1] < arr[m]) return m;
  else if (arr[m - 1] > arr[m] && arr[m] > arr[m + 1]) return go(arr, l, m - 1);
  else return go(arr, m + 1, h); 
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  const len = nums.length;
  if (!len) return 0;
  return go(nums, 0, len - 1);
};

// 5/30/2017
const findPeakElement = arr => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    let m = (l + h) >> 1;
    let next = m + 1;
    if (arr[m] < arr[next]) l = next;
    else h = m;

  }
  return l;
};