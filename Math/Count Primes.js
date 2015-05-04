/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

  if (n < 2) {
    return 0;
  }

  var primes = [];

  var i, j;

  for (i = 2 ; i <= n ; i++) {
    primes[i] = true;
  }

  for (i = 2 ; i <= Math.sqrt(n - 1) ; i++) {

    if (primes[i]) {
      for (j = i + i ; j < n ; j += i) {
        primes[j] = false;
      }
    }

  }

  var c = 0;

  for (i = 2 ; i < n ; i++) {
    if (primes[i]) {
      c++;
    }
  }

  return c;

};