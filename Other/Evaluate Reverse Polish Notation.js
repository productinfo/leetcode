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