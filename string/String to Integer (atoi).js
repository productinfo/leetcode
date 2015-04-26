/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

  var l = str.length;

  var MAX = Math.pow(2, 31) - 1;
  var MIN = -Math.pow(2, 31);

  if (!str || l === 0) {
    return 0;
  }

  str = str.trim();

  var sign;

  var index = 0;

  // check negative or positive
  if (str[0] === '+') {
    sign = '+';
    index++;
  } else if (str[0] === '-') {
    sign = '-';
    index++;
  }

  var res = 0;

  while (l > index && str[index] >= '0' && str[index] <= '9') {
    var t = parseInt(str[index++], 10);
    res = res * 10 + t;
  }

  if (sign === '-') {
    res = -res;
  }

  if (res > MAX) {
    return MAX
  }

  if (res < MIN) {
    return MIN
  }

  return res;

};