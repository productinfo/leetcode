// HEAP
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = [];
  for (const v1 of nums1) {
    for (const v2 of nums2) {
      heap.push([v1, v2]);
    }
  }
  heap.sort(([a, b], [c, d]) => (a + b) - (c + d));
  const res = [];
  while (k > 0) {
    if (!heap.length) return res;
    res.push(heap.shift());
    k--;
  }
  return res;
};

//
var kSmallestPairs = function(nums1, nums2, k) {
  if (!nums1.length || !nums2.length || !k) return [];
  const heap = [];
  for (let i = 0; i < nums1.length && i < k; i++) {
    heap.push([nums1[i], nums2[0], 0]);
  }
  const compare = ([a, b], [c, d]) => a + b - c - d;
  const res = [];
  while (heap.length && k--) {
    heap.sort(compare);
    const [v1, v2, index] = heap.shift();
    res.push([v1, v2]);
    if (index === nums2.length - 1) continue;
    heap.push([v1, nums2[index + 1], index + 1]);
  }
  return res;
};
