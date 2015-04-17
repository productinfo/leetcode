/**
 * @param {number[]} num
 * @return {number}
 */
var longestConsecutive = function(num) {
  
  var len = num.length;

  if (len === 0) {
    return 0;
  }

  var i = 0, index, c,
      map = {},
      max = 0;

  for (; i < len ; i++) {

    if (!map.hasOwnProperty(num[i])) {
      map[num[i]] = 0;
    }

  }

  var get = function (n, desc) {

    var counter = 0;

    while (map.hasOwnProperty(n)) {

      counter++;

      if (desc) {
        n--;
      } else {
        n++;
      }

    }

    return counter;

  };

  for (i = 0; i < len ; i++) {

    max = Math.max(max, get(num[i], true) + get(num[i] + 1, false));

  }

  return max;

};