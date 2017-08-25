/*
Given a list of number, there is only one peak or one drop. Find the maximum drop.
Exps:
1 -> 2 -> 3 -> 9 -> 3 -> 0 = 9;
10 -> 4 -> 3 -> 8 = 7 ;
*/
/**
 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */
var findPeakElement = function(nums) {
  let l = 0;
  let h = nums.length - 1;
  while (l < h) {
    let m = (l + h) >> 1;
    if (nums[m] > nums[m + 1]) {
      h = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
const y = arr => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    let m = (l + h) >> 1;
    if (arr[m] < arr[m + 1]) {
      h = m;
    } else {
      l = m + 1;
    }
  }
  return arr[l];
};
const x = arr => {
	const maxIndex = findPeakElement(arr);
	const min = y(arr.slice(maxIndex));
	return arr[maxIndex] - min;
};

console.log(x([1, 2, 3, 9, 3, 0]));
console.log(x([10, 4, 3, 8]));

// 5/30/2017
/*
Given a list of number, there is only one peak or one drop. Find the maximum drop.
Exps:
1 -> 2 -> 3 -> 9 -> 3 -> 0 = 9;
10 -> 4 -> 3 -> 8 = 7 ;
*/
/**
 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */

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

const findLow = arr => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    let m = (l + h) >> 1;
    let next = m + 1;
    if (arr[m] > arr[next]) l = next;
    else h = m; 
  }
  return l;
};

const x = arr => {
  const i = findPeakElement(arr);
  const j = findLow(arr.slice(i));
  return arr[i] - arr[i + j];
};
console.log(x([1, 2, 3, 9, 3, 0]));
console.log(x([10, 4, 3, 8]));