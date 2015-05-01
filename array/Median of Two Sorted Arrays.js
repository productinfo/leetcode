/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  var m = nums1.length,
      n = nums2.length,
      k = m + n;

  if (k % 2 === 0) {
    // even
    return (go(nums1, 0, m, nums2, 0, n, k >> 1) + go(nums1, 0, m, nums2, 0, n, (k >> 1) + 1)) / 2;
  } else {
    // odd
    return go(nums1, 0, m, nums2, 0, n, (k + 1) >> 1);
  }

};

var go = function (A, as, ae, B, bs, be, k) {

  var al = ae - as;
  var bl = be - bs;

  if (al <= 0) {
    return B[bs + k - 1];
  }

  if (bl <= 0) {
    return A[as + k - 1];
  }

  if (k === 1) {
    return Math.min(A[as], B[bs]);
  }

  var midA = (as + ae) >> 1;
  var midB = (bs + be) >> 1;

  if (A[midA] <= B[midB]) {

    if ((al >> 1) + (bl >> 1) + 1 >= k) {
      return go(A, as, ae, B, bs, midB, k);
    } else {
      return go(A, midA + 1, ae, B, bs, be, k - (al >> 1) - 1);
    }

  } else {

    if ((al >> 1) + (bl >> 1) + 1 >= k) {
      return go(A, as, midA, B, bs, be, k);
    } else {
      return go(A, as, ae, B, midB + 1, be, k - (bl >> 1) - 1);
    }

  }



};