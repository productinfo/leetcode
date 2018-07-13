var checkRecord = function(s) {
  if (!s || !s.length) return false;
  let As = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') As++;
    if (As > 1) return false;
    if (i > 1 && s[i] === 'L' && s[i] === s[i - 1] && s[i] === s[i - 2]) return false;
  }
  return true;
};
