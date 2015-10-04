var fib = (function () {

  var cached = [];

  return function rec (n) {

    if (cached[n]) {
      return cached[n];
    }

    if (n < 2) {
      return 1;
    }

    cached[n] = rec(n - 1) + rec(n - 2);

    return cached[n];

  };

})();