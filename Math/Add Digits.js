const addDigits = n => {
  if (n < 10) return n;
  let t = 0;
  while (n > 0) {
    t += (n % 10);
    n = (n / 10) >> 0;
  }
  return addDigits(t);
};