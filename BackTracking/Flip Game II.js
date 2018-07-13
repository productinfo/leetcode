var canWin = function(s) {
  if (!s || !s.length) return false;
  const cache = {};
  const dfs = str => {
    if (str in cache) return cache[str];
    for (let j = 0; j < str.length - 1; j++) {
      if (str[j] === '+' && str[j + 1] === '+') {
        const opposite = `${str.slice(0, j)}--${str.slice(j + 2)}`;
        if (!dfs(opposite)) {
          cache[str] = true;
          return true;
        }
      }
    }
    cache[str] = false;
    return false;
  };
  return dfs(s);
};

// 
var canWin = function(s) {
  if (!s || !s.length) return false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '+' && s[i + 1] === '+') {
      const str = `${s.slice(0, i)}--${s.slice(i + 2)}`;
      if (!canWin(str)) return true;
    }
  }
  return false;
};
