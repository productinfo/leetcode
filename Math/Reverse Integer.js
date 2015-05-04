/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  var n = Math.abs(x);

  var a = 0;

  while (n !== 0) {

    var d = n % 10;

    a = a * 10 + d;

    n = (n / 10) >> 0;

  }

  if (x < 0) {
    return -a;
  } else {
    return a;
  }

};