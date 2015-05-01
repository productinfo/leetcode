/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
  var res = '';

  if (!num1 || !num2) {
    return res;
  }

  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  var n1 = num1.length;
  var n2 = num2.length;

  // if (n2 > n1) {
  //   return multiply(num2, num1);
  // }

  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');

  var i, j, a, b;

  var carry = 0, tmp = [];

  for (var g = 0 ; g < n1 + n2 ; g++) {
    tmp[g] = 0;
  }

  for (i = 0; i < n1 ; i++) {

    a = parseInt(num1[i]);
    // console.log(a);
    for (j = 0 ; j < n2 ; j++) {

      b = parseInt(num2[j]);
      tmp[i + j] += a * b;

    }

  }
  // console.log(tmp);
  for (var z = 0 ; z < tmp.length ; z++) {
    var d = tmp[z] % 10;
    carry = (tmp[z] / 10) >> 0;
    res = d + res;
    if (z < tmp.length - 1) {
      tmp[z + 1] += carry;
    }

  }

  var index;

  for (var p = 0 ; p < res.length ; p++) {
    if (res[p] !== '0') {
      index = p;
      break;
    }
  }

  return res.substring(index);

};