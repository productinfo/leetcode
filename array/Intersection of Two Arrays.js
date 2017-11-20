const intersection = (a, b) => {
  const map = {};
  a.forEach(i => {
    if (b.indexOf(i) !== -1) {
      map[i] = true;
    }
  });
  return Object.keys(map).reduce((acc, key) => (acc.push(+key), acc), []);
};

// 8/31/2017
var intersection = function(nums1, nums2) {
  const map = {};
  for (const v1 of nums1) map[v1] = 0;
  for (const v2 of nums2) {
    if (v2 in map) map[v2]++;
  }
  return Object.keys(map).filter(v => map[v] > 0).map(c => +c);
};