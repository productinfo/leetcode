var triangle = function (arr) {

  var len = arr.length;

  var c = 0;

  var i = 0, j, k;

  arr = arr.sort(function (a, b) {
    return a - b;
  });

  for (; i < len - 2 ; i ++) {

    for (j = i + 1 ; j < len - 1 ; j++) {

      k = j + 1;

      while (k < len && arr[i] + arr[j] > arr[k]) {

        c++;
        k++;

      }

    }

  }

  return c;

};
