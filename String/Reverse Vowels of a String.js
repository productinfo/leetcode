const swap = (g, i, j) => {
  if (i > j) return;
  const t = g[i];
  g[i] = g[j];
  g[j] = t;
}
const reverseVowels = str => {
  let g = str.split('');
  let len = g.length
  let s = 0;
  let e = len - 1;
  const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (s < e) {
    while (s < len && v.indexOf(g[s]) === -1) {
      s++;
    }
    while (e >= 0 && v.indexOf(g[e]) === -1) {
      e--;
    }
    swap(g, s, e);
    s++;
    e--;
  }
  return g.join('');
};