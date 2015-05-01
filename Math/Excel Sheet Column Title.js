/**
 * @param {number} n
 * @return {string}
 */

var map = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
  0: 'Z'
};

var convertToTitle = function(n) {

  var res = '';

  if (n < 0) {
    return res;
  }

  while (n) {

    var r = n % 26;
    n = (n / 26) >> 0;
    if (r === 0) {
      n--;
    }
    res = map[r] + res;

  }

  return res;
};