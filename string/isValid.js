/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  var map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  var len = s.length;

  if (len === 0) return true;
	if (len === 1) return false;

  var stack = [], i = 0;

  for (; i < len ; i++) {

    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== map[s[i]]) return false;
    }

  }

  return stack.length === 0;
};
