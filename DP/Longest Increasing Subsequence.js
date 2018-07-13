const lengthOfLIS = arr => {
  const tmp = [];
  let size = 0;
  for (const n of arr) {
    let i = 0;
    let j = size;
    while (i !== j) {
      const m = (i + j) >> 1;
      if (tmp[m] < n) {
        i = m + 1;
      } else {
        j = m;
      }
    }
    tmp[i] = n;
    if (i === size) size++;
  }
  return size;
};
