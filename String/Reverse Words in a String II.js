const x = s => {
  const rev = (i, j) => {
    while (i < j) {
      const tmp = g[i];
      g[i] = g[j];
      g[j] = tmp;
      i++;
      j--;
    }
  };
  const g = s.split('');
  rev(0, s.length - 1);
  let start = 0;
  for (let i = 0; i < g.length; i++) {
    if (g[i] === ' ') {
      rev(start, i - 1);
      start = i + 1;
    }
  }
  rev(start, s.length - 1);
  return g.join('')
};
console.log(x('the sky is blue'));

// 4/8/2018

const reverseWords = arr => {
  const rev = (i, j) => {
    while (i < j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  };

  rev(0, arr.length - 1);
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      rev(start, i - 1);
      start = i + 1;
    }
  }
  rev(start, arr.length - 1);
  // console.log(arr)
};
