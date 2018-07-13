/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let res = '';
  while (i >= 0 && j >= 0) {
    const sum = (+num1[i--]) + (+num2[j--]) + carry;
    res = (sum % 10) + res;
    carry = (sum / 10) >> 0;
  }
  while (i >= 0) {
    const sum = (+num1[i--]) + carry;
    res = (sum % 10) + res;
    carry = (sum / 10) >> 0;
  }
  while (j >= 0) {
    const sum = (+num2[j--]) + carry;
    res = (sum % 10) + res;
    carry = (sum / 10) >> 0;
  }
  return carry ? carry + res : res;
};