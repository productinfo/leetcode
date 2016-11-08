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

// 4/7/2016
const countPrimes = (n) => {

  let c = 0, tmp = [];

  for (let i = 2; i < Math.sqrt(n); i++) {

    if (!tmp[i]) {
      for (let j = i + i; j <= n; j += i) {
        if (!tmp[j]) tmp[j] = true;
      }
    }

  }

  for (let i = 2; i < n; i++) {
    if (!tmp[i]) c++;
  }

  return c;
};

// 9/21/2016
var countPrimes = function(n) {
  const tmp = [];
  for (let i = 2; i * i < n; i++ ) {
    for (let j = i + i; j < n; j += i) {
      tmp[j] = true;
    }
  }

  let c = 0;
  for (let i = 2; i < n; i++) {
    !tmp[i] && c++;
  }
  return c;
};
