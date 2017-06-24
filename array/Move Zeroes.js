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

// 3/27/2017
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

// O(n)

const moveZeroes = arr => {
  let p1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // not 0
      swap(arr, i, p1++);
    }
  }
};

// 4/8/2017
// [0, 1, 0, 3, 12]
// [1, 3, 12, 0, 12]
const moveZeroes = nums => {
  if (!nums.length) return;
  const swap = (x, y) => {
    const tmp = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  };
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) swap(i, p++);
  }
};