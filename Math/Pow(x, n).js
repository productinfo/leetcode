var myPow = function(x, n) {
  // console.log(x, n);
  var tmp;

  if (n === 0) {
    return 1;
  } else if (n === -1) {
    return 1 / x;
  }

  tmp = myPow(x, n >> 1);

  if (n % 2 === 0) {
    return tmp * tmp;
  } else {
    return x * tmp * tmp;
  }

};