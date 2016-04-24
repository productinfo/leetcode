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
