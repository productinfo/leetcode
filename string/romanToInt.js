/**
 * Given a roman numeral, convert it to an integer.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */

function map (char) {
  
  switch (char) {

    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;

  }

}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  var r = 0;

  for (var i = 0 ; i < s.length ; i++) {

    if (i > 0 && map(s[i]) > map(s[i - 1])) {
      r += map(s[i]) - 2 * map(s[i - 1]);
    } else {
      r += map(s[i]);
    }

  }

  return r;

};