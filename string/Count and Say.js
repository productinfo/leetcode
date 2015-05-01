/**
 * @param {number} n
 * @returns {string}
 */
var countAndSay = function(n) {

  var r = '1';

  if (n === 0 || n === 1) {
    return r;
  }

  var i = 2, j, str, counter, char;

  for (; i <= n ; i++) {

    str = '';

    j = 0;

    for (; j < r.length ; j++) {

      counter = 1;

      char = r[j];

      while (j + 1 < r.length && char === r[j + 1]) {

        counter += 1;
        j += 1;

      }

      str += (counter + char);

    }

    r = str;

  }

  return r;

};