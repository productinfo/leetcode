var checkInclusion = function(s1, s2) {
  const isp = (v1, v2) => {
    const map = {};
    for (const ch of v1) {
      map[ch] = map[ch] || 0;
      map[ch]++;
    }
    for (const ch of v2) {
      if (ch in map) map[ch]--;
      else return false;
    }
    return Object.keys(map).every(ch => map[ch] === 0);
  };
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (isp(s2.slice(i, i + s1.length), s1)) return true;
  }
  return false;
};

var checkInclusion = function(s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;
  if (l1 > l2) return false;
  const map = {};
  for (const ch of s1) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  let counter = l1;
  let p1 = 0;
  let p2 = 0;
  while (p2 < l2) {
    const ch = s2[p2];
    if (ch in map) {
      if (map[ch] > 0) counter--;
      map[ch]--;
    }
    p2++;
    while (counter === 0) {
      const cx = s2[p1];
      if (cx in map) {
        map[cx]++;
        if (map[cx] > 0) counter++;
      }
      if (p2 - p1 === l1) {
        return true;
      }
      p1++;
    }
  }
  return false;
};
