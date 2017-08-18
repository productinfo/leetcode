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

// 4/16/2017
// We're given a sorted array of integers: [-3, -1, 0, 1, 2]. We want to generate a sorted array of their squares: [0, 1, 1, 4, 9]
// [0, 1, 1, 4, 9]
const z = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const neg = [];
  const pos = [];
  // 1. split into neg and pos
  for (const a of arr) {
    if (a < 0) {
      neg.push(a * a);
    } else {
      pos.push(a * a);
    }
  }
  // 2. square and reverse neg
  let p = 0;
  let n = neg.length - 1;
  // 3. merge two sorted array
  while (p < pos.length && n >= 0) {
    if (pos[p] < neg[n]) {
      res.push(pos[p++]);
    } else {
      res.push(neg[n--]);
    }
  }
  while (p < pos.length) {
    res.push(pos[p++]);
  }
  while (n >= 0) {
    res.push(neg[n--]);
  }
  return res;
};

console.log(z([-3, -1, 0, 1, 2]));