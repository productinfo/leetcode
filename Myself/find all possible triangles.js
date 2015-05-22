/**
 * eg: 9 8 10 7 
 * ans: 9 8 10, 9 8 7, 9 10 7, 7 8 10 
 */

var triangle = function (arr) {

  var len = arr.length;

  var res = [];

  var i = 0, j, k;

  arr = arr.sort(function (a, b) {
    return a - b;
  });

  for (; i < len ; i ++) {

    for (j = i + 1 ; j < len - 1 ; j++) {

      k = j + 1;

      while (k < len && arr[i] + arr[j] > arr[k]) {

        res.push([arr[i], arr[j], arr[k]]);
        k++;
        
      }

    }

  }

  return res;

};