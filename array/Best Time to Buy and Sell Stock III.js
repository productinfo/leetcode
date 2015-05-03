/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  var l = prices.length;

  var left = [0], right = [];

  right[l - 1] = 0;

  var min = prices[0];

  var max = prices[l - 1];

  var i;

  for (i = 1 ; i < l ; i++) {

    min = Math.min(min, prices[i]);

    left[i] = Math.max(prices[i] - min, left[i - 1]);

  }

  for (i = l - 2 ; i >= 0 ; i--) {

    max = Math.max(max, prices[i]);

    right[i] = Math.max(max - prices[i], right[i + 1]);

  }

  var profit = 0;

  for (i = 0 ; i < l ; i++) {

    profit = Math.max(profit, left[i] + right[i]);

  }

  return profit;

};