/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  var pv = [1];

  if (rowIndex === 0) {
    return pv;
  }

  pv.push(1);

  if (rowIndex === 1) {
    return pv;
  }

  for (var i = 2 ; i <= rowIndex ; i++) {

    var next = [1];

    for (var j = 1 ; j <= i - 1 ; j++) {

      next.push(pv[j - 1] + pv[j]);

    }

    next.push(1);

    pv = next;

  }

  return next;

};

// 4/19/2016
var getRow = function getRow(n) {
  if (n < 0) return [];
  if (n === 0) return [1];

  var pv = getRow(n - 1);
  var cur = [1];
  for (var i = 1; i < pv.length; i++) {
    cur.push(pv[i] + pv[i - 1]);
  }
  cur.push(1);
  return cur;
};

// 9/10/2016
var goo = function(rowIndex) {
  const res = [];
  if (rowIndex < 0) return res;
  for (let i = 0; i < rowIndex + 1; i++) {
    res.unshift(1);
		for (let j = 1; j < res.length - 1; j++) {
			res[j] = res[j] + res[j + 1];
		}
  }
  return res;
};

// 11/28/2016
const getRow = n => {
  let p = [1];
  if (n === 0) return p;
  for (let i = 1; i <= n; i++) {
    const cur = [1];
    for (let l = p.length, j = 0; j < l - 1; j++) {
      cur.push(p[j] + p[j + 1]);
    }
    cur.push(1);
    p = cur;
  }
  return p;
};

// 3/28/2018
var getRow = function(rowIndex) {
  let pv = [1];
  if (rowIndex === 0) return pv;
  for (let i = 0; i < rowIndex; i++) {
    const cur = [1];
    for (let j = 0; j < pv.length - 1; j++) {
      cur.push(pv[j] + pv[j + 1]);
    }
    cur.push(1);
    pv = cur;
  }
  return pv;
};

// recursive
const getRow = rowIndex => {
  if (rowIndex === 0) return [1];
  const pv = getRow(rowIndex - 1);
  const cur = [1];
  for (let j = 0; j < pv.length - 1; j++) {
    cur.push(pv[j] + pv[j + 1]);
  }
  cur.push(1);
  return cur;
};

