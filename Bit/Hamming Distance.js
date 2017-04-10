// XOR
const hammingDistance = (x, y) => (x ^ y).toString(2).split('').reduce((total, c) => {
  if (c === '1') total += 1;
  return total;
}, 0);