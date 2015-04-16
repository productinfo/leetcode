/**
 * @param {number[]} num
 * @returns {number[][]} an array of number arrays with length = 3
 */
var threeSum = function (num) {

  var len = num.length;

  if (len < 3) {
    return [[]];
  }

  // sort array
  num.sort(function (a, b) {
    return a - b;
  });

  var i = 0, result = [];

  for (; i < i < len - 2 ; i++) {

    if (i > 0 && num[i] === num[i - 1]) {
      continue;
    }

    var j = i + 1, k = len - 1, negate = -num[i];

    while (j < k) {

      if (j > i + 1 && num[j] === num[j - 1]) {
        j++;
        continue;
      }

      var sum = num[i] + num[j] + num[k];

      if (sum === 0) {
        result.push([num[i], num[j], num[k]]);
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }

    }

  }

  return result;

};