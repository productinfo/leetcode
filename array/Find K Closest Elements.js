var findClosestElements = function(arr, k, x) {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    const m = (l + h) >> 1;
    if (x - arr[m] > arr[m + k] - x) {
      l = m + 1;
    } else {
      h = m;
    }
  }
  return arr.slice(l, l + k);
};

var findClosestElements = function(arr, k, x) {
  let l = 0;
  let h = arr.length - k;
  while (l < h) {
    const m = (l + h) >> 1;
    if (x > arr[m]) {
      if (x - arr[m] > arr[m + k] - x) {
        l = m + 1;
      } else {
        h = m;
      }
    } else {
      h = m;
    }
  }
  return arr.slice(l, l + k);
};
