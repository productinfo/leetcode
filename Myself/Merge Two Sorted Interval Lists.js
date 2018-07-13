class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const a = new Interval(1, 3);
const b = new Interval(6, 7);
const c = new Interval(9, 12);

const x = new Interval(2, 4);
const y = new Interval(8, 10);

const zz = (i1, i2) => {
  const l1 = i1.length;
  const l2 = i2.length;
  let i = 0;
  let j = 0;
  const res = [];
  while (i < l1 || j < l2) {
    if (j === l2 || (i < l1 && i1[i].start <= i2[j].start)) {
      if (res.length && i1[i].start <= res[res.length - 1].end) {
        res[res.length - 1].end = Math.max(res[res.length - 1].end, i1[i].end);
      } else {
        res.push(i1[i]);
      }
      i++;
    } else {
      if (res.length && i2[j].start <= res[res.length - 1].end) {
        res[res.length - 1].end = Math.max(res[res.length - 1].end, i2[j].end);
      } else {
        res.push(i2[j]);
      }
      j++;
    }
  }
  return res;
};

console.log(zz(
  [a],
  [x, y]
))
