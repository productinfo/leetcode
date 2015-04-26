/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

  var l = s.length;

  if (s === undefined || l === 0) {
    return '';
  }

  if (numRows === 1 || l === 1) {
    return s;
  }

  var step = 2 * numRows - 2;

  var i = 0, j;

  var res = '';

  for (; i < numRows ; i++) {

    if (i === 0 || i === numRows - 1) {
      // head and tail
      for (j = i ; j < l ; j += step) {
        res += s[j];
      }
    } else {
      
      j = i;
      var step1 = 2 * (numRows - i - 1)
      var step2 = step - step1;

      var f = true;

      while (j < l) {

        res += s[j];

        if (f) {
          j += step1;
        } else {
          j += step2;
        }

        f = !f;

      }

    }

  }

  return res;
};