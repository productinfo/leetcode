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

// 11/27/2016
const myPow = (x, n) => {
  if (n === -1) return 1 / x;
  if (n === 0) return 1;
  const tmp = myPow(x, n >> 1);
  return n % 2 === 0 ? tmp * tmp : tmp * tmp * x;
};