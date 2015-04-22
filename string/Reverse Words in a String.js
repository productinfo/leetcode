/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {

  var len = str.length, res = '';

  if (len === 0) {
    return res;
  }

  str = str.trim();

  var sp = str.split(' ');
  var sl = sp.length;
  var i = sl - 1

  for (; i >= 0 ; i--) {

    if (sp[i] !== '') {
      res += sp[i] + ' ';
    }

  }

  return res.trim();
};