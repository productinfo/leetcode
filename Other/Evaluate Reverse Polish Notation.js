/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

  var l = tokens.length;

  if (l === 0) {
    return 0;
  }

  var s = [], t, d1, d2;

  for (var i = 0 ; i < l ; i++) {

    t = tokens[i];

    if (t === '+') {
      d1 = s.pop();
      d2 = s.pop();
      s.push(d1 + d2);
    } else if (t === '-') {
      d1 = s.pop();
      d2 = s.pop();
      s.push(d2 - d1);
    } else if (t === '*') {
      d1 = s.pop();
      d2 = s.pop();
      s.push(d1 * d2);
    } else if (t === '/') {
      d1 = s.pop();
      d2 = s.pop();
      s.push((d2 / d1) >> 0);
    } else {
      s.push(parseInt(t, 10));
    }

  }

  return s.pop();

};

// 11/29/2016
const evalRPN = tokens => {
  const stack = [];
  let d1, d2;
  for (let l = tokens.length, i = 0; i < l; i++) {
    if (tokens[i] === '+') {
      d1 = stack.pop();
      d2 = stack.pop();
      stack.push(d1 + d2);
    } else if (tokens[i] === '-') {
      d1 = stack.pop();
      d2 = stack.pop();
      stack.push(d2 - d1);
    } else if (tokens[i] === '*') {
      d1 = stack.pop();
      d2 = stack.pop();
      stack.push(d1 * d2);
    } else if (tokens[i] === '/') {
      d1 = stack.pop();
      d2 = stack.pop();
      stack.push((d2 / d1) >> 0);
    } else {
      stack.push(+tokens[i]);
    }
  }
  return stack.pop();
};