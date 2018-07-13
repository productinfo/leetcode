/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  const len = s.length;
  if (!len) return 0;
  let sign = 1;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let v = parseInt(s[i], 10);
    if (!isNaN(v)) {
      // digit
      while (i + 1 < len && !isNaN(parseInt(s[i + 1], 10))) {
        v = v * 10 + (+s[i + 1]);
        i++;
      }
      res += v * sign;
    } else if (s[i] === '(') {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (s[i] === ')') {
      res = res * stack.pop() + stack.pop();
    } else if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    }
  }
  return res;
};