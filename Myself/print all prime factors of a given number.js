var allFactors = function (n) {

  var s = '';
  
  var temp = Math.sqrt(n);

  while (n % 2 === 0) {

    s += 2 + ' ';

    n = n >> 1;

  }

  var i = 3;
  
  for (; i <= temp ; i += 2) {
    
    while (n % i === 0) {

      s += i + ' ';

      n = (n / i) >> 0;

    }

  }

  if (n > 2) {
    s += n;
  }
  
  return s.trim();

};

console.log(allFactors(12));