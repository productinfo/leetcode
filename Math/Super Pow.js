// 9/21/2016
var superPow = function(a, b) {
  const x = get(b);
  if (get(b) === 0) return 1;
  const t = superPow(a, ('' + (x >> 1)).split('').map(d => +d));
  return x % 2 === 0 ? t * t : t * t * a;
};

const get = arr => arr.reduce((prev, curr) => {
  return prev * 10 + curr;
}, 0);
