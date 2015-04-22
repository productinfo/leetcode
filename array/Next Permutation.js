/**
 * @param {number[]} num
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(num) {
    
  var l = num.length;

  if (l === 0) {
    return;
  }

  var k = -1;
  var i;

  for (i = 0 ; i < l ; i++) {

    if (num[i] < num[i + 1]) {
      k = Math.max(k, i);
    }

  }

  if (k === -1) {
    rev(num, 0, l - 1);
  } else {

    var p = 0;

    for (i = 0 ; i < l ; i++) {

      if (num[i] > num[k]) {
        p = Math.max(p, i);
      }

    }

    swap(num, k, p);
    rev(num, k + 1, l - 1);

  }

};

var swap = function (n, a, b) {
  var t = n[a];
  n[a] = n[b];
  n[b] = t;
};

var rev = function (n, s, e) {

  var mid = Math.floor((s + e) / 2);

  for (var i = s ; i <= mid ; i++) {
    swap(n, i, s + e - i);
  }
};