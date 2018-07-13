var generatePossibleNextMoves = function(s) {
  const res = [];
  if (!s || !s.length) return res;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '+' && s[i + 1] === '+') {
      res.push(`${s.slice(0, i)}--${s.slice(i + 2)}`);
    }
  }
  return res;
};
