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

// 9/15/2016
var countAndSay = function(n) {
  let r = '1';
  if (n < 2) {
    return r;
  }

  for (let i = 2; i <= n; i++) {
    let t = '';
    const size = r.length; // not really necessary
    for (let j = 0; j < size; j++) {
      let c = 1;
      const char = r[j];
      while (j + 1 < size && char === r[j + 1]) {
        j++;
        c++;
      }
      t += (c + char);
    }
    r = t;
  }
  return r;
};
