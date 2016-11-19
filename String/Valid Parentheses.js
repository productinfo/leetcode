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

// 3/18/2016
var map = {
  ')': '(',
  ']': '[',
  '}': '{'
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  if (!s) return false;

  var len = s.length, stack = [], c;

  while (len--) {
    c = s[len];
    if (c === ')' || c === '}' || c === ']') {
      stack.push(c);
    } else {
      if (map[stack.pop()] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 10/22/2016
const isValid = s => {
  const stack = [];
  const len = s.length;
  if (!len) return true;
  for (let i = 0; i < len; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (s[i] === ')' && stack.length && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (s[i] === ']' && stack.length && stack[stack.length - 1] === '[') {
      stack.pop();
    } else if (s[i] === '}' && stack.length && stack[stack.length - 1] === '{') {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
