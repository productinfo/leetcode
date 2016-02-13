/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  var map = {};

  while (!map.hasOwnProperty(n)) {

    map[n] = true;

    n = getSum(n);

    if (n === 1) {
      return true;
    }

  }

  return false;

};

var getSum = function (num) {

  var total = 0;

  while (num > 0) {

    total += Math.pow((num % 10), 2);

    num = (num / 10) >> 0;

  }

  return total;

};
