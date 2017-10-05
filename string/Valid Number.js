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

  var i,
      t = '0123456789e.+-'.split(''),
      len,
      ecounter = 0;

  if (s.length === 0) {
    return false;
  }

  s = s.trim();
  s = s.toLowerCase();

  len = s.length;

  for (i = 0 ; i < len ; i++) {
    if (t.indexOf(s[i]) === -1) {
      return false
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

    for (i = 0 ; i < es[1].length ; i++) {
      if (es[1][i] === '.') {
        return false;
      }
    }

    return check(es[0]) && check(es[1]);

  }

};

var check = function (str) {

  var l = str.length, i,
      t = '0123456789.'.split('');

  if (l === 0) {
    return false;
  }

  if (str[0] === '+' || str[0] === '-') {
    str = str.substring(1);
  }

  if (str.length === 0 || str === '.') {
    return false;
  }

  var dot = 0;

  l = str.length;

  for (i = 0 ; i < l ; i++) {
    if (t.indexOf(str[i]) === -1) {
      return false;
    }
    if (str[i] === '.') {
      dot++;
    }
  }

  if (dot > 1) {
    return false;
  }

  return true;


};

// 3/31/2016
const check = (str) => {
  const ch = '0123456789.';
  let dot = 0, len = str.length;

  if (!len) return false;

  if (str[0] === '+' || str[0] === '-') {
    str = str.substring(1);
  }

  len = str.length;

  if (!len || str === '.') return false;

  while (len--) {
    if (ch.indexOf(str[len]) === -1) {
      return false;
    }

    if (str[len] === '.') {
      dot++;
    }
  }

  return !(dot > 1);
};

const isNumber = (str) => {

  if (!str) return false;

  str = str.trim().toLowerCase();

  const len = str.length;

  if (!len) return false;

  const chs = '0123456789+-.e'.split('');

  let i = len, e = 0;

  while(i--) {
    if (chs.indexOf(str[i]) === -1) {
      return false;
    }
    if (str[i] === 'e') {
      e++;
    }
  }

  if (e > 1) return false;

  if (e) {
    // e is 1
    const eg = str.split('e');
    for (let i = 0; i < eg[1].length; i++) {
      if (eg[1][i] === '.') {
        return false;
      }
    }
    return check(eg[0]) && check(eg[1]);
  } else {
    // e is 0
    return check(str);
  }
};

// 9/21/2017
const v = s => {
  const valid = '0123456789.';
  if (!s || !s.length) return false;
  if (s[0] === '+' || s[0] === '-') s = s.substring(1);
  if (!s.length || s === '.') return false;
  let dot = 0;
  for (let i = 0; i < s.length; i++) {
    if (valid.indexOf(s[i]) < 0) return false;
    if (s[i] === '.') dot++;
  }
  return dot < 2;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (!s || !s.length) return false;
  s = s.trim().toLowerCase();
  const validChar = '01234567890+-.e';
  let e = 0;
  for (let i = 0; i < s.length; i++) {
    if (validChar.indexOf(s[i]) < 0) return false;
    if (s[i] === 'e') e++;
    if (e > 1) return false;
  }
  if (e !== 0) {
    const g = s.split('e');
    for (let i = 0; i < g[1].length; i++) {
      if (g[1][i] === '.') return false;
    }
    return v(g[0]) && v(g[1]);
  }
  return v(s);
};

// 9/26/2017
const v = s => {
  if (!s || !s.length) return false;
  if (s[0] === '+' || s[0] === '-') s = s.substring(1);
  if (!s.length || s === '.') return false;
  const valid = '01234567890.'.split('');
  let dot = 0;
  for (let i = 0; i < s.length; i++) {
    if (valid.indexOf(s[i]) < 0) return false;
    if (s[i] === '.') dot++;
    if (dot > 1) return false;
  }
  return true;
};

/**
 * 1
 * 0.1
 * +1
 * -2
 * 1.23
 * 2e3
 * 
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (!s || !s.length) return false;
  s = s.trim();
  const valid = '0123456789+-.e'.split('');
  let e = 0;
  for (let i = 0; i < s.length; i++) {
    if (valid.indexOf(s[i]) < 0) return false;
    if (s[i] === 'e') e++;
    if (e > 1) return false;
  }
  if (e !== 0) {
    const g = s.split('e');
    for (let i = 0; i < g[1].length; i++) {
      if (g[1][i] === '.') return false;
    }
    return v(g[0]) && v(g[1]);
  }
  return v(s);
};
