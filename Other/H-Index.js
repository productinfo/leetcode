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

// 8/20/2017
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length;
  if (!len) return 0;
  const tmp = Array.from({ length: len + 1 }, v => 0);
  for (let i = 0; i < len; i++) {
    if (citations[i] >= len) tmp[len]++;
    else tmp[citations[i]]++;
  }
  let t = 0;
  for (let i = tmp.length - 1; i >= 0; i--) {
    t += tmp[i];
    if (t >= i) return i;
  }
  return 0;
};