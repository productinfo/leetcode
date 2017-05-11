const p = (s, n) => {
  if (n === 1) return s;
  const tmp = p(s, n >> 1);
  return n % 2 === 0 ? `${tmp}${tmp}` : `${tmp}${s}${tmp}`;
};