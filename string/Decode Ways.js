/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

  var map = {}, r = 0;

  var go = function (str) {

    if (map.hasOwnProperty(str)) {
      return map[str];
    }

    var l = str.length;

    if (!str || l === 0 || str[0] === '0') {
      return 0;
    }

    if (l === 1) {
      return 1;
    }

    var d = parseInt(s.substring(0, 2));

    if (l === 2) {

      if (d < 27) {
        // valid
        r = 1 + go(s.substring(1));
      } else {
        // invalid
        r = go(s.substring(1));
      }

      map[str] = r;
      return;

    }

    if (d > 9 && d < 27) {
      r = go(s.substring(2)) + go(s.substring(1));
    } else {
      r = go(s.substring(1));
    }

    map[str] = r;

  };

  go(s);

  return r;
};

var check = function (s) {

  var l = s.length;

  if (l === 0 || s[0] === '0') {
    return false;
  }

  if (l === 2) {

    if (parseInt(s[0]) > 2 || (s[0] === '2' && parseInt(s[1]) > 6)) {
      return false;
    }

  }

  return true;

};