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

    if (i === 0 || num[i] > num[i - 1]) {

      var neg = -num[i];

      var start = i + 1, end = len - 1;

      while (start < end) {

        if (num[start] + num[end] === neg) {

          // var tmp = ;
          result.push([num[i], num[start], num[end]]);

          start++;
          end--;

          while (start < end && num[start] === num[start - 1]) {
            start++;
          }

          while (start < end && num[end] === num[end + 1]) {
            end--;
          }

        } else if (num[start] + num[end] === neg) {
          start++;
        } else {
          end--;
        }

      }

    }

  }

  return result;

};