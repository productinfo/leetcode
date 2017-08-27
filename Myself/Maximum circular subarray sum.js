const getMax = arr => {
  let max = -Infinity;
  let total = 0;
  for (const a of arr) {
    total += a;
    if (total < a) total = a;
    max = Math.max(max, total);
  }
  return max
};

const x = arr => {
  const m1 = getMax(arr);
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = -arr[i];
    t += arr[i];
  }
	const m2 = getMax(arr);
	return Math.max(m1, (t - m2) * -1);
};

console.log(x([
	2, 3, -6, -7, 4, 5
]));