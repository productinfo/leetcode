/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {

  var len = input.length, res = [];

  if (len === 0) return res;

  var i = 0, part1, part2, m, n, ml, nl;

  for (; i < len ; i++) {

    if (input[i] !== '+' && input[i] !== '-' && input[i] !== '*') continue;

    part1 = diffWaysToCompute(input.substring(0, i));
    part2 = diffWaysToCompute(input.substring(i + 1));

    ml = part1.length;
    nl = part2.length;

    for (m = 0 ; m < ml ; m++) {

      for (n = 0 ; n < nl ; n++) {

        if (input[i] === '+') res.push(parseInt(part1[m], 10) + parseInt(part2[n], 10));
        else if (input[i] === '-') res.push(parseInt(part1[m], 10) - parseInt(part2[n], 10));
        else if (input[i] === '*') res.push(parseInt(part1[m], 10) * parseInt(part2[n], 10));

      }

    }

  }

  if (res.length === 0) res.push(parseInt(input, 10));

  return res;

};

// 9/18/2016
var diffWaysToCompute = function(input) {

  const res = [];
  if (!input || !input.length) return res;
  for (let i = 0; i < input.length; i++) {
    if (!Number.isInteger(+input[i])) {
      const left = diffWaysToCompute(input.substring(0, i));
      const right = diffWaysToCompute(input.substring(i + 1));
      for (let m = 0; m < left.length; m++) {
        for (let n = 0; n < right.length; n++) {
          res.push(fb(input[i], left[m], right[n]));
        }
      }
    }
  }
  return res.length ? res : [+input];

};

const fb = (op, a, b) => {
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  } else {
    return a * b;
  }
}

// 5/31/2017
const get = (v1, v2, op) => {
  if (op === '+') return v1 + v2;
  if (op === '-') return v1 - v2;
  if (op === '*') return v1 * v2;
};
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const res = [];
  const len = input.length;
  if (!len) return res;
  for (let i = 0; i < len; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
      const right = diffWaysToCompute(input.substring(0, i));
      const left = diffWaysToCompute(input.substring(i + 1));
      for (const v1 of right) {
        for (const v2 of left) {
          res.push(get(v1, v2, input[i]));
        }
      }
    }
  }
  return res.length ? res : [+input];
};
