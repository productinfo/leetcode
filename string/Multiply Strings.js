/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  var res = '';

  if (!num1 || !num2) return res;

  if (num1 === '0' || num2 === '0') return '0';

  var n1 = num1.length,
      n2 = num2.length,
      i, j, a, b, tl, sum,
      carry = 0, tmp = [];

  for (i = 0; i < n1 ; i++) {

    a = parseInt(num1[i], 10);

    for (j = 0 ; j < n2 ; j++) {

      b = parseInt(num2[j], 10);

      if (tmp[i + j]) {
        tmp[i + j] += a * b;
      } else {
        tmp[i + j] = a * b;
      }

    }

  }

  tl = tmp.length;

  for (i = tl - 1 ; i >= 0 ; i--) {
    sum = tmp[i] + carry;
    carry = (sum / 10) >> 0;
    res = (sum % 10) + res;
  }

  // if (carry) res = carry + res;

  return carry ? carry + res : res;

};

// 3/28/2016
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  var res = '';

  if (!num1 || !num2) return res;

  if (num1 === '0' || num2 === '0') return '0';

  var n1 = num1.length,
      n2 = num2.length,
      i, j, a, b, tl, sum,
      carry = 0, tmp = [];

  for (i = 0; i < n1 ; i++) {

    a = parseInt(num1[i], 10);

    for (j = 0 ; j < n2 ; j++) {

      b = parseInt(num2[j], 10);

      if (tmp[i + j]) {
        tmp[i + j] += a * b;
      } else {
        tmp[i + j] = a * b;
      }

    }

  }

  tl = tmp.length;

  while (tl--) {
    sum = +(tmp[tl]) + carry;
    res = (sum % 10) + res;
    carry = (sum / 10) >> 0;
  }

  return carry ? carry + res : res;

};
