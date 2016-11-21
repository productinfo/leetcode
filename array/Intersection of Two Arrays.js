const intersection = (a, b) => {
  const map = {};
  a.forEach(i => {
    if (b.indexOf(i) !== -1) {
      map[i] = true;
    }
  });
  return Object.keys(map).reduce((acc, key) => (acc.push(+key), acc), []);
};