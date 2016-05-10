/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  var adv = 0,
      i = a.length - 1,
      j = b.length - 1,
      da, db, d, r = '';

  while (i >= 0 && j >= 0) {

    da = parseInt(a[i--]);
    db = parseInt(b[j--]);

    d = da + db + adv;

    r = (d % 2) + r;

    adv = d >> 1;

  }

  while (i >= 0) {
    da = parseInt(a[i--]);
    d = da + adv;
    r = (d % 2) + r;
    adv = d >> 1;
  }

  while (j >= 0) {
    db = parseInt(b[j--]);
    d = db + adv;
    r = (d % 2) + r;
    adv = d >> 1;
  }

  if (adv === 1) {
    r = '1' + r;
  }

  return r;

};

// 3/30/2016
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  var adv = 0,
      i = a.length - 1,
      j = b.length - 1,
      d, r = '';

  while (i >= 0 && j >= 0) {
    d = +a[i--] + +b[j--] + adv;
    r = (d % 2) + r;
    adv = d >> 1;
  }

  while (i >= 0) {
    d = +a[i--] + adv;
    r = (d % 2) + r;
    adv = d >> 1;
  }

  while (j >= 0) {
    d = +b[j--] + adv;
    r = (d % 2) + r;
    adv = d >> 1;
  }

  return adv ? adv + r : r;

};
