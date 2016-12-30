/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
  var len = nums.length;

  if (len === 0 || k === 0) {
    return;
  }
  
  k %= len;
  
  // reverse nums
  nums = nums.reverse();

  rev(nums, 0, k - 1);
  rev(nums, k, len - 1);

};

var rev = function (n, start, end) {

  var tmp;

  while (start < end) {
    tmp = n[start];
    n[start] = n[end];
    n[end] = tmp;
    start++;
    end--;
  }

};

// 10/24/2016
const rev = (arr, i, j) => {
  while (i < j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    i++;
    j--;
  }
};

const rotate = (arr, k) => {
  const len = arr.length;
  k %= len;
  arr = arr.reverse();
  rev(arr, 0, k - 1);
  rev(arr, k, arr.length - 1);
};