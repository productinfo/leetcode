const swap = (arr, i, j) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};
const moveZeroes = arr => {
  const len = arr.length;
  let z = 0;
  for (let i = 0; i < len; i++) {
  	if (arr[i] !== 0) arr[z++] = arr[i];
  }
	for (let i = z; i < len; i++) {
  	arr[i] = 0;
  }
};