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

// 6/7/2018
// O(nlogn)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 */
var intersection = function(nums1, nums2) {
  // sort
  const des = (a, b) => a - b;
  nums1.sort(des);
  nums2.sort(des);
  let i = 0;
  let j = 0;
  const res = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
  }
  return [...res];
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 */
var intersection = function(nums1, nums2) {
  // sort
  const des = (a, b) => a - b;
  nums1.sort(des);
  nums2.sort(des);
  let i = 0;
  let j = 0;
  const res = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
  }
  return [...res];
};

