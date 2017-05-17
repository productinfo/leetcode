const hIndex = citations => {
  let len = citations.length;
  if (len < 1) return 0;
  const counts = Array.from({ length: len + 1}, v => 0);
  for (const c of citations) {
    if (c > len) counts[len] += 1;
    else counts[c] += 1;
  }
  let res = 0;
  for (let k = len; k >= 0; k--) {
    res += counts[k];
    if (res >= k) return k;
  }
  return 0;
};