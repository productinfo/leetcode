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

// 4/4/2016
const maxProfit = (n) => {

  const len = n.length;
  if (!len) return 0;

  let max = 0, min = n[0];

  for (let i = 1; i < len; i++) {

    if (n[i] < min) {
      min = n[i];
    }

    max = Math.max(max, n[i] - min);

  }

  return max;

};
