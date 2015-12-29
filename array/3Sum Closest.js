/**
 * @param {number[]} num
 * @param {number} target
 * @returns {number}
 */
var threeSumClosest = function (num, target) {

  var len = num.length,
      result = 0, min = Number.MAX_VALUE;

  num.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0 ; i < len - 2 ; i++) {

    var j = i + 1,
        k = len - 1;

    while (j < k) {

      var sum = num[i] + num[j] + num[k];

      var diff = Math.abs(target - sum);

      if (diff === 0) {
        return sum;
      }

      if (diff < min) {
        min = diff;
        result = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }

    }

  }

  return result;

};
