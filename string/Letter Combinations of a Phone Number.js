/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  var map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  var res = [], len = digits.length, sub = '';

  if (len === 0) {
    return res;
  }

  var go = function (start) {

    if (start === len) {
      res.push(sub);
      return;
    }

    // digits[start] -> 2, 3
    
    var x = map[digits[start]],
        xl = x.length;

    for (var i = 0 ; i < xl ; i++) {

      sub += x[i];
      go(start + 1);
      sub = sub.substring(0, sub.length - 1);

    }

  };

  go(0);

  return res;

};