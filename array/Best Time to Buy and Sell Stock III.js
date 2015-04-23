/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  var l = prices.length;

  var i;

  var res = [];

  var lowest = prices[0];

  var maxProfit = 0;

  var profit;

  for (i = 1 ; i < l ; i++) {

    profit = prices[i] - lowest;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    res.push(maxProfit);
    if (prices[i] < lowest) {
      lowest = prices[i];
    }
  }

};