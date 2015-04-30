/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findMedianSortedArrays = function(A, B) {
    
  var la = A.length,
      lb = B.length,
      total = la + lb;

  // if (la === 0 && lb === 0) {
  //   return 0;
  // }

  if (total % 2 === 0) {

    // even
    return floor(fms(A, 0, la, B, 0, lb, floor(total)) + fms(A, 0, la, B, 0, lb, floor(total) + 1));

  } else {

    // odd
    return fms(A, 0, la, B, 0, lb, floor(total) + 1);

  }

};

var floor = function (x) {
  return Math.floor(x / 2);
};

var fms = function (A, as, ae, B, bs, be, k) {

  var n = ae - as,
      m = be - bs;

  if (n <= 0) {
    return B[bs + k - 1];
  }

  if (m <= 0) {
    return A[as + k - 1]
  }

  if (k === 1) {
    return Math.min(A[as], B[bs]);
  }

  var am = (as + ae) / 2,
      bm = floor(bs + be);

  if (am <= bm) {

    if ((floor(m + n) + 1) >= k) {
      // disgard b2
      return fms(A, as, ae, B, bs, bm, k);
    } else {
      // disgard a1
      return fms(A, am + 1, ae, B, bs, bm, k - n / 2 - 1);
    }

  } else {
    if ((floor(m + n) + 1) >= k) {

      // disgard a2
      return fms(A, as, am, B, bs, be, k);

    } else {
      
      // disgard b1
      return fms(A, as, ae, B, bm + 1, be, k - m / 2 - 1);
    }
  }
};