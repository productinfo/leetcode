/**
 * @param {number} num
 * @returns {string}
 */
var intToRoman = function(num) {
  var symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var result = '';

  for (var i = 0 ; i < vals.length ; i++) {

    while (num >= vals[i]) {

      result += symbols[i];
      num -= vals[i]

    }

  }

  return result;
};