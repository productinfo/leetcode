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
  var l = s.length;
  for (var i = 0 ; i < l ; i++) {
    r += map(s[i]);
    if (i > 0 && map(s[i]) > map(s[i - 1])) {
      r -= 2 * map(s[i - 1]);
    }
  }

  return r;
};