/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {

  var i = 0,
      len = s.length,
      map = {},
      res = [],
      key;

  if (len === 0) {
    return res;
  }

  for (; i < len - 9 ; i++) {

    key = strToLong(s.substr(i, 10));

    if (map[key]) {
      map[key]++;
    } else {
      map[key] = 0;      
    }

  }

  for (var item in map) {

    if (map[item] > 1) {
      res.push(longToStr(item));
    }

  }

  return res;

};

var strToLong = function (str) {
  
  var c = 0, len = str.length, i = 0;

  for (; i < 10 ; i++) {

    if (str[i] === 'A') {
      c *= 10 + 1
    }

    if (str[i] === 'T') {
      c *= 10 + 2
    }

    if (str[i] === 'C') {
      c *= 10 + 3
    }

    if (str[i] === 'G') {
      c *= 10 + 4
    }

  }

};

var longToStr = function (n) {

    var s = '', len = n.length, i = 0, d;

    for (; i < 10 ; i++) {

      d = n % 10;

      if (d === 1) {
        s = 'A' + s;
      }

      if (d === 2) {
        s = 'T' + s;
      }

      if (d === 3) {
        s = 'C' + s;
      }

      if (d === 4) {
        s = 'G' + s;
      }

      s = (s / 10) >> 0;

    }

    return s;

};