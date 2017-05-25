const go = (s, l) => {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (l.includes(s[i])) {
			res.push(s[i]);
			const z = l.indexOf(s[i]);
			l.splice(z, 1);
		}
  }
  return res;
}
// O(n ^ 2)
const intersect = (n1, n2) => {
  const l1 = n1.length;
  const l2 = n2.length;
  if (l1 > l2) return go(n2, n1);
  else return go(n1, n2);
};

// O(n)
const intersect = (n1, n2) => {
  const map = {};
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] in map) {
      map[n1[i]] += 1;
    } else {
      map[n1[i]] = 1;
    }
  }
  const res = [];
  for (let i = 0; i < n2.length; i++) {
    if (n2[i] in map) {
      if (map[n2[i]] > 0) {
        res.push(n2[i]);
        map[n2[i]] -= 1;
      }
    }
  }
  return res;
};