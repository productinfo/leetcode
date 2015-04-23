/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  var l = prices.length;

  if (l < 2) {
    return 0;
  }

  var i = 0;

  var total = 0;

  var delta;

  for (; i < l ; i++) {

    delta = prices[i] - prices[i - 1];

    if (delta > 0) {
      total += delta;
    }

  }

  return total;

};