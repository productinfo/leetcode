/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  var map = {};

  while (!map.hasOwnProperty(n)) {

    map[n] = true;

    n = getSum(n);

    if (n === 1) {
      return true;
    }

  }

  return false;

};

var getSum = function (num) {

  var total = 0;

  while (num > 0) {

    total += Math.pow((num % 10), 2);

    num = (num / 10) >> 0;

  }

  return total;

};

// 4/7/2016
// space O(n)
const get = (n) => {

  let total = 0;

  while (n > 0) {
    const d = n % 10;
    total += d * d;
    n = (n / 10) >> 0;
  }

  return total;

};

const isHappy = (n) => {

  const map = {};

  while (!map[n]) {
    map[n] = true;
    n = get(n);
    if (n === 1) return true;
  }

  return false;
};

// space O(1)
const get = (n) => {

  let total = 0;

  while (n > 0) {
    const d = n % 10;
    total += d * d;
    n = (n / 10) >> 0;
  }

  return total;

};

const isHappy = (n) => {

  let d1 = n, d2 = get(n);

  while (d1 !== d2) {
    d1 = get(d1);
    d2 = get(get(d2));
  }

  return d1 === 1;
};
