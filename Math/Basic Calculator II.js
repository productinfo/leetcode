/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let n = 0;
  let sign = '+';
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i], 10))) {
      n = n * 10 + (+s[i]);
    }
    if ('+-*/'.indexOf(s[i]) > -1 || i + 1 === s.length) {
      if (sign === '+') stack.push(n);
      if (sign === '-') stack.push(-n);
      if (sign === '*') stack.push(stack.pop() * n);
      if (sign === '/') stack.push((stack.pop() / n) >> 0);
      sign = s[i];
      n = 0;
    }
  }
  for (const v of stack) res += v;
  return res;
};