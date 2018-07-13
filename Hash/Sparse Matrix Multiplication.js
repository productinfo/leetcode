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

// only store non-zero element
const multiply = (A, B) => {
	const ay = A.length;
	const ax = A[0].length;
	const bx = B[0].length;
	const res = [];
	const tmp = [];
	for (let i = 0; i < ay; i++) {
		res.push(Array.from({ length: bx }, v => 0));
		tmp.push([]);
	}
	for (let y = 0; y < ay; y++) {
		for (let x = 0; x < ax; x++) {
			if (A[y][x]) tmp[y].push({
				val: A[y][x],
				x
			});
		}
	}
	// console.log(tmp);
	for (let y = 0; y < ay; y++) {
		for (let k = 0; k < tmp[y].length; k++) {
			const { x, val } = tmp[y][k];
			for (let j = 0; j < bx; j++) {
				res[y][j] += val * B[x][j];
			}
		}
	}
	return res;
};

// 4/18/2017
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const ay = A.length;
  const ax = A[0].length;
  const bx = B[0].length;
  const t = [];
  const res = [];
  for (let y = 0; y < ay; y++) {
    t.push([]);
    res.push(Array.from({ length: bx }, v => 0));
    for (let x = 0; x < ax; x++) {
      if (A[y][x]) {
        t[y].push({
          val: A[y][x],
          x: x
        });
      }
    }
  }
  for (let y = 0; y < ay; y++) {
    for (let k = 0; k < t[y].length; k++) {
      const { val, x } = t[y][k];
      for (let i = 0; i < bx; i++) {
        res[y][i] += val * B[x][i];
      }
    }
  }
	return res;
};  