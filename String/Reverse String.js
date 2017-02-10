const reverseString = s => s.split('').reverse().join('');

const reverseString = str => {
  let s = 0;
  let e = str.length - 1;
  const g = str.split('');
  while (s < e) {
    const t = g[s];
    g[s] = g[e];
    g[e] = t;
    s++;
    e--;
  }
  return g.join('')
};