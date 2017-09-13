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
  26: 'Z'
};

var convertToTitle = function(n) {
  if (n < 0) return null;
  if (n < 27) return map[n];
  if (n % 26 === 0) return map[(n / 26) - 1] + 'Z';
  return convertToTitle((n / 26) >> 0) + map[n % 26];
};

// 3/30/2017
const convertToTitle = n => {
  if (n < 26) return map[n];
  if (n % 26 === 0) {
    return convertToTitle((n / 26) - 1) + 'Z';
  } else {
    return convertToTitle() + map[n % 26];
  }
};

const convertToTitle = n => {
  if (n <= 26) return map[n];
  if (n % 26 === 0) {
    return convertToTitle((n / 26) - 1) + 'Z';
  } else {
    return convertToTitle((n / 26) >> 0) + map[n % 26];
  }
};