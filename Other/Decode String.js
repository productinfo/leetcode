var decodeString = function(s) {
  if (!s || !s.length) return '';
  let res = '';
  const len = s.length;
  const stack = [];
  const word = [];
  let i = 0;
  while (i < len) {
    if (s[i] === '[') {
      word.push(res);
      res = '';
      i++;
    } else if (s[i] === ']') {
      let tmp = word.pop();
      const time = stack.pop();
      for (let k = 0; k < time; k++) {
        tmp += res;
      }
      res = tmp;
      i++;
    } else if (!isNaN(s[i])) {
      // number
      let count = 0;
      while (!isNaN(s[i])) {
        count = count * 10 + (+s[i++]);
      }
      stack.push(count);
    } else {
      // string
      res += s[i++];
    }
  }
  return res;
};
