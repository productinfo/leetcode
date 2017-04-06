const multiply = (A, B) => {
  const ay = A.length;
  const ax = A[0].length;
  const bx = B[0].length;
  const res = [];
  for (let y = 0; y < ay; y++) {
    res.push(Array.from({ length: bx }, v => 0));
  }
  for (let y = 0; y < ay; y++) {
    for (let x = 0; x < ax; x++) {
			if (A[y][x]) {
				for (let k = 0; k < bx; k++) {
					if (B[x][k]) {
						res[y][k] += A[y][x] * B[x][k];
					}
				}
			}
    }
  }
	return res;
};