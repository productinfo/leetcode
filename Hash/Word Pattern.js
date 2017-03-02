const wordPattern = (pattern, str) => {
  const g = str.split(' ');
  if (g.length !== pattern.length) return false;
  const map = {};
  for (let l = g.length, i = 0; i < l; i++) {
    if (map[pattern[i]]) {
        if (map[pattern[i]] !== g[i]) return false;
    } else {
      if (Object.keys(map).some(k => map[k] === g[i])) return false;
      map[pattern[i]] = g[i];
    }
  }
  return true;
};