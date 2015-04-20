/*
    null
    trim
    ""
    toLowerCase
    if contains char not in [0..9e.+-]: false
    if more than 1 e: false
    if contains e split to s1 and s2
    if s2 contains .: false
    for s, s1, or s2
    if more than 1 .:false
    if str[0] is - or + remove it
    if str is "" or "." false
    if not all chars are in [0..9.] false
    //if str[0]=='0'&&str[1]!='.': false
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

  

  var map = {}, i,
      t = '0123456789e.+-'.split(''),
      len,
      ecounter = 0;

  if (s.length === 0) {
    return false;
  }

  s = s.trim();
  s = s.toLowerCase();

  len = s.length;

  for (i = 0 ; i < t.length ; i++) {
    map[t[i]] = true;
  }

  for (i = 0 ; i < len ; i++) {
    if (!map.hasOwnProperty(s[i])) {
      return false;
    }
    if (s[i] === 'e') {
      ecounter++;
    }
  }

  if (ecounter > 1) {
    return false;
  }

  if (ecounter === 0) {
    // no e
    return check(s);
  } else {
    // has e
    var es = s.split('e');
    if (es.length <= 1) {
      return false;
    }

    for (i = 0 ; i < es[1].length ; i++) {
      if (es[1][i] === '.') {
        return false;
      }
    }

    return check(es[0]) && check(es[1]);

  }

};

var check = function (str) {

  var l = str.length, i, m = {},
      t = '0123456789.'.split('');

  if (l === 0) {
    return false;
  }

  var dot = 0;

  for (i = 0 ; i < l ; i++) {
    if (str[i] === '.') {
      dot++;
    }
  }

  if (dot > 1) {
    return false;
  }

  if (str[0] === '+' || str[0] === '-') {
    str = str.substring(1);
  }

  if (str.length === 0 || str === '.') {
    return false;
  }

  for (i = 0 ; i < t.length ; i++) {
    m[t[i]] = true;
  }

  for (i = 0 ; i < str.length ; i++) {
    if (!m.hasOwnProperty(str[i])) {
      return false;
    }
  }

  return true;


};