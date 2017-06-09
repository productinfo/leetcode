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

  return stack.length === 0 ? '/' : '/' + stack.join('/');
};

// 3/28/2017
const simplifyPath = path => {
  let res = '';
  path = path.trim();
  const stack = [];
	const gs = path.split('/');
  for (let i = 0; i < gs.length; i++) {
    if (gs[i] === '.' || gs[i] === '') {
      // no-op
    } else if (gs[i] === '..') {
      stack.pop();
    } else {
      stack.push(gs[i]);
    }
  }
  return stack.length ? `/${stack.join('/')}` : '/';
};
