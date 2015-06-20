/**
 * There are ‘n’ ticket windows in the railway station, ith window has ai tickets available. Price of a ticket is equal to the number of tickets remaining in that window at that time. When ‘m’ tickets have been sold, what’s the maximum amount of money the railway station can earn?
e.g.
INPUT: n=2, m=4
a1=2 , a2=5
OUTPUT: 14(2nd window sold 4 tickets so 5+4+3+2).
 */

var railway = function (prices, totalTks, currentTks) {

  if (totalTks === currentTks) {
    return 0;
  }

  prices = prices.sort(function (a, b) {
    return a - b;
  });

  var sum = 0, i, len = prices.length;

  for (i = len - 1 ; i >= 1 ; i--) {

    while (prices[i - 1] <= prices[i] && currentTks < totalTks) {

      sum += prices[i];
      prices[i]--;
      currentTks++;

    }

    if (currentTks === totalTks) {
      return sum;
    }

  }

  return sum + railway(prices, totalTks, currentTks);

};

console.log(railway([2, 5], 4, 0));