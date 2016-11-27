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

// 9/16/2016
var multiply = function(num1, num2) {

  if (num1 === '0' || num2 === '0') return '0';

  const l1 = num1.length;
  const l2 = num2.length;

  const t = Array.from({ length: l1 + l2 - 1 }, v => 0);
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      t[i + j] += (+num1[i] * +num2[j]);
    }
  }
  let res = '';
  let carry = 0;
  let len = t.length;
  while (len--) {
    const sum = t[len] + carry;
    res = (sum % 10) + res;
    carry = (sum / 10) >> 0;
  }
  return carry ? carry + res : res;
};
