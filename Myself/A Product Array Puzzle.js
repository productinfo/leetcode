/**
 * Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. Solve it without division operator and in O(n).

Example:
arr[] = {10, 3, 5, 6, 2}
prod[] = {180, 600, 360, 300, 900}
 */

var prod = function (arr) {

  var p = [];

  if (!arr) {
    return [];
  }

  var len = arr.length;

  if (len === 0) {
    return [];
  }

  var left = [1], right = [];

  var i, j;

  right[len - 1] = 1;
  
  for (i = 1 ; i < len ; i++) {

    left[i] = arr[i - 1] * left[i - 1];

  }

  for (i = len - 1 ; i >= 0 ; i--) {
    if (i < len - 1) {
      right[i] = arr[i + 1] * right[i + 1];
    }
    p[i] = left[i] * right[i];
  }
  
  return p;
};

console.log(prod([10, 3, 5, 6, 2]));