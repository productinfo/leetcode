var repeatedStringMatch = function(A, B) {
  let c = 0;
  let t = '';
  while (t.length < B.length) {
    t += A;
    c++;
  }
  if (t.includes(B)) return c;
  if ((t + A).includes(B)) return c + 1;
  return -1;
};
