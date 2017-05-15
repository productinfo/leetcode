// O(logn)
const solution = isBadVersion => n => {
  let start = 1;
  let end = n;
  while (start < end) {
    let m = start + ((end - start) >> 1);
    if (isBadVersion(m)) {
      end = m;
    } else {
      start = m + 1;
    }
  }

  return start;
};