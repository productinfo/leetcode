var findPermutation = function(s) {
  if (!s || !s.length) return [];
  const l = s.length + 1;
  const res = Array.from(Array(l), (_, i) => i + 1);
  const swap = (a, b) => {
    while (a < b) {
      const tmp = res[a];
      res[a] = res[b];
      res[b] = tmp;
      a++;
      b--;
    }
  };
  
  for (let j = 0; j < l; j++) {
    if (s[j] === 'D') {
      let tmp = j;
      while (j < l && s[j] === 'D') j++;
      swap(tmp, j);
    }
  }
  return res;
};
