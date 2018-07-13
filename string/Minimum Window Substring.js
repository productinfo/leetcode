/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

  if (s === undefined || t === undefined) {
    return '';
  }

  var sl = s.length;
  var tl = t.length;

  if (sl === 0 && tl === 0) {
    return '';
  }

  if (tl > sl) {
    return '';
  }

  var needFind = {};
  var alreadyFind = {};

  var i;

  for (i = 0 ; i < tl ; i++) {

    alreadyFind[t[i]] = 0;

    if (needFind.hasOwnProperty(t[i])) {
      needFind[t[i]] += 1;
    } else {
      needFind[t[i]] = 1;
    }

  }

  var start = -1;
  var end = sl;

  var go = 0, len = 0;

  for (i = 0 ; i < sl ; i++) {

    var curChar = s[i];

    if (alreadyFind.hasOwnProperty(curChar)) {

      alreadyFind[curChar] += 1;

      if (alreadyFind[curChar] <= needFind[curChar]) {
        len++;
      }

      if (len === tl) {

        while (!needFind.hasOwnProperty(s[go]) || alreadyFind[s[go]] > needFind[s[go]]) {

          if (needFind[s[go]]) {
            alreadyFind[s[go]] -= 1;
          }

          go++;

        }

        if (i - go < end - start) {
          start = go;
          end = i;
        }

      }

    }

  }

  if (start === -1) {
    return '';
  }

  return s.substring(start, end + 1);

};

// O(n)
/**
 * 
 1. Use two pointers: start and end to represent a window.
 2. Move end to find a valid window.
 3. When a valid window is found, move start to find a smaller window.
 */
const minWindow = (s, t) => {
  const map = {};
  for (const c of s) {
    map[c] = 0;
  }
  for (const c of t) {
    if (c in map) map[c] += 1;
  }
  let start = 0;
  let end = 0;
  let counter = t.length;
  let minStart = 0;
  let minLen = Infinity;
  let size = s.length;
  while (end < size) {
    const c1 = s[end];
    if (map[c1] > 0) counter -= 1;
    map[c1] -= 1;
    end += 1;
    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }
      const c2 = s[start];
      map[c2] += 1;
      if (map[c2] > 0) counter += 1;
      start += 1;
    }
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
};

// 4/12/2018
var minWindow = function(s, t) {
  const map = {};
  for (const ch of s) map[ch] = 0;
  for (const ch of t) map[ch]++;
  let p1 = 0;
  let p2 = 0;
  let count = t.length;
  let max = Infinity;
  let res = s;
  while (p2 < s.length) {
    if (map[s[p2]] > 0) count--;
    map[s[p2]]--;
    p2++;
    while (count === 0) {
      if (p2 - p1 < max) {
        max = p2 - p1;
        res = s.slice(p1, p2);
      }
      map[s[p1]]++;
      if (map[s[p1]] > 0) count++;
      p1++;
    }
  }
  return max === Infinity ? "" : res;
};
