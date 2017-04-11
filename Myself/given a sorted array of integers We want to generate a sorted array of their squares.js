// [-3, -1, 0, 1, 2]
// [0, 1, 1, 4, 9]

// O(n) for time and space
const square = (arr, isNeg) => {
  const res = [];
  for (const v of arr) {
    if (isNeg) {
      res.unshift(v * v);
    } else {
      res.push(v * v);
    }
  }
  return res;
};

const merge = (a1, a2) => {
  const a3 = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      a3.push(a1[i++]);
    } else {
      a3.push(a2[j++]);
    }
  }
  while (i < a1.length) {
    a3.push(a1[i++]);
  }
  while (j < a2.length) {
    a3.push(a2[j++]);
  }
  return a3;
};

const zzz = arr => {
  // 1. split into half
  let neg = [];
  let pos = [];
  for (const v of arr) {
    if (v < 0) {
      neg.push(v);
    } else {
      pos.push(v);
    }
  }
  // 2. square both
  neg = square(neg, true);
  pos = square(pos);
  // console.log(neg, pos);
  // 3. merge two sorted array
  return merge(neg, pos);
};

const y = zzz([-3, -1, 0, 1, 2]);
console.log(y);