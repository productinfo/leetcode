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

// 4/17/2016
var maxProfit = function(prices) {

  let max = 0;
  let min = prices[0];

  const len = prices.length;
  for (let i = 1; i < len; i++) {
    if (prices[i] < min) min = prices[i];
    max = Math.max(max, prices[i] - min);
  }

  return max;

};

// 4/5/2017
const maxProfit = prices => {
  let min = Infinity;
  let max = 0;
  for (const p of prices) {
    if (p < min) min = p;
    max = Math.max(max, p - min);
  }
  return max;
};
