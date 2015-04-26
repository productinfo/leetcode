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

  var str = num + '';
  var l = str.length;
  var i = 0;
  var total = 0;

  for (; i < l ; i++) {

    total += Math.pow(parseInt(str[i], 10), 2);

  }

  return total;

};