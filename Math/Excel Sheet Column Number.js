/**
 * @param {number} n
 * @return {string}
 */

/**
 * @param {string} s
 * @return {number}
 */

var map = {
  'A': 01,
  'B': 02,
  'C': 03,
  'D': 04,
  'E': 05,
  'F': 06,
  'G': 07,
  'H': 08,
  'I': 09,
  'J': 10,
  'K': 11,
  'L': 12,
  'M': 13,
  'N': 14,
  'O': 15,
  'P': 16,
  'Q': 17,
  'R': 18,
  'S': 19,
  'T': 20,
  'U': 21,
  'V': 22,
  'W': 23,
  'X': 24,
  'Y': 25,
  'Z': 26
};

var titleToNumber = function(s) {

  var l = s.length;

  if (!s || l === 0) {
    return 0;
  }

  var index = l - 1;
  var t = 0;
  var res = 0;

  while (index >= 0) {

    res += map[s[index]] * Math.pow(26, t);
    t++;
    index--;

  }

  return res;

};