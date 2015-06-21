var printFactors = function (n) {

  var go = function (result, dividend, prev) {

    if (result === '') {
      console.log(prev + ' * 1');
    }

    var factor, next;

    for (factor = dividend - 1 ; factor >= 2 ; factor--) {

      if (dividend % factor === 0 && factor <= prev) {
        
        next = dividend / factor;

        if (next <= factor && next <= prev) {
          console.log(result + factor + ' * ' + next);
        }

        go(result + factor + ' * ', next, factor);
      }

    }

  };

  go('', n, n);

};

printFactors(12);