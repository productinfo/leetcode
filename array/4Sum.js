/**
 * @param {number[]} num
 * @param {number} target
 * @returns {number[][]}
 */
var fourSum = function(num, target) {
  
  var len = num.length;

  if (len < 4) {
    return [[]];
  }

  var result = [], a, b, c, d;

  num.sort(function (a, b) {
    return a - b;
  });

  for (a = 0; a < len - 3 ; a++) {

    if (a > 0 && num[a] === num[a - 1]) {
      continue;
    }

    for (b = a + 1 ; b < len - 2 ; b++) {

      if (b > a + 1 && num[b] === num[b - 1]) {
        continue;
      }

      c = b + 1;
      d = len - 1;

      while (c < d) {

        if (c > b + 1 && num[c] === num[c - 1]) {
          c++;
          continue;
        }

        var sum = num[a] + num[b] + num[c] + num[d];

        if (sum === target) {
          result.push([num[a], num[b], num[c], num[d]]);
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }

      }

    }

  }

  return result;

};