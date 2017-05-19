// binary search 
// [0, 1, 3, 5, 5, 5, 5] = 4
// [0, 1, 3, 4, 5, 5, 5] = 4
const hIndex = citations => {
  let l = 0;
  let h = citations.length - 1;
  let len = citations.length;
  while (l <= h) {
    let m = (l + h) >> 1;
    if (citations[m] === len - m) {
      return len - m;
    } else if (citations[m] < len - m) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return len - l;
};