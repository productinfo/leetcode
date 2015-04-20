/*
  test:
      /
      /a
      ///a///a
      /.././
      leading/trailing spaces
      null
  */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

  var res = '',
      len = path.length;

  if (len === 0) {
    return res;
  }

  path = path.trim();

  var stack = [];

  var sp = path.split('/');

  for (var i = 0 ; i < sp.length ; i++) {
    if (sp[i] === '' || sp[i] === '.') {
      // no-op
    } else if (sp[i] === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else{
      stack.push(sp[i]);
    }
  }

  if (stack.length === 0) {
    return '/';
  }

  while (stack.length > 0) {
    res += '/' + stack.shift();
  }

  return res;
};