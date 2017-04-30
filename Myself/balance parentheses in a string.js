/*
"(a)()" -> "(a)()"
"((bc)" -> "(bc)"
")))a((" -> "a"
"(a(b)" ->"(ab)" or "a(b)"
*/
const x = s => {
  const len = s.length;
  const stack = [];
  let i = 0
  while (i < s.length) {
    if (s[i] === '(') {
      stack.push(i);
      i += 1;
    } else if (s[i] === ')') {
      if (stack.length) {
        stack.pop();
        i += 1;
      } else {
        s = `${s.substring(0, i)}${s.substring(i + 1)}`;
      }
    } else {
      i += 1;
    }
  }
  while (stack.length) {
    const i = stack.pop();
    s = `${s.substring(0, i)}${s.substring(i + 1)}`;
  }
  return s;
};