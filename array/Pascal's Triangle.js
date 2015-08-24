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
