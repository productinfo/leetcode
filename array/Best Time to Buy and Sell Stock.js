/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  var l = prices.length;

  if (l === 0 || l === 1) {
    return 0;
  }

  // var buy = 0;

  var i = 0;

  var max = -1;

  var min = Number.MAX_VALUE;

  // var increasing = false;

  for (; i < l ; i++) {

    if (prices[i] < min) {
      min = prices[i];
    }

    var diff = prices[i] - min;

    if (diff > max) {
      max = diff;
    }

  }

  return max;

};