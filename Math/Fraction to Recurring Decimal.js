/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

  if (numerator === 0) {
    return '0';
  }

  if (denominator === 0) {
    return '';
  }

  var res = '';

  // if it is negative
  if (
    ((numerator < 0) && (denominator > 0)) ||
    ((numerator > 0) && (denominator < 0))
  ) {
    res += '-';
  }

  var n = Math.abs(numerator);
  var d = Math.abs(denominator);

  // quotient
  var ans = (n / d) >> 0;
  res += ans;

  // if remainder is 0, return
  var rem = (n % d) * 10;
  if (rem === 0) {
    return res;
  }

  var map = {};

  res += '.';

  while (rem !== 0) {

    // if repeat
    if (map.hasOwnProperty(rem)) {

      var index = map[rem];

      return res.substring(0, index) + '(' + res.substring(index) + ')';

    }

    // continue
    map[rem] = res.length;

    ans = (rem / d) >> 0;

    res += ans;

    rem = (rem % d) * 10;

  }

  return res;

};