/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows === 0) {
    return [];
  }

  var pv = [1], cur, pvLength,
      result = [pv], i = 2, j;

  for (; i <= numRows ; i++) {

    cur = [1];

    pvLength = pv.length;

    for (j = 0 ; j < pvLength - 1 ; j++) {

      cur.push(pv[j] + pv[j + 1]);

    }

    cur.push(1);

    result.push(cur);

    pv = cur;

  }


  return result;

};

// 4/19/2016
var generate = function(n) {
  if (n < 1) {
    return [];
  }

  var r = [[1]];

  if (n === 1) {
    return r;
  }

  for (var i = 1; i < n; i++) {
    var pv = r[i - 1];
    var cur = [1];
    for (var j = 1; j < pv.length; j++) {
      cur.push(pv[j] + pv[j - 1]);
    }
    cur.push(1);
    r.push(cur);
  }

  return r;
};

// 11/28/2016
const generate = n => {
  const res = [];
  if (n < 1) return res;
  res.push([1]);
  if (n < 2) return res;
  for (let i = 1; i < n; i++) {
    const pv = res[i - 1];
    const cur = [1];
    for (let l = pv.length, j = 0; j < l - 1; j++) {
      cur.push(pv[j] + pv[j + 1]);
    }
    cur.push(1);
    res.push(cur);
  }
  return res;
};
