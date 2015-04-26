/**
 * @param {string} s
 * @returns {string[][]}
 */
var partition = function(s) {

  var res = [], i = 1;

  var len = s.length;

  if (len === 0) {
    res.push([]);
    return res;
  }

  for (; i <= len ; i++) {

    if (isPa(s.substring(0, i))) {

      var list = partition(s.substring(i));
      var l2 = list.length;

      for (var j = 0 ; j < l2 ; j++) {
        list[j].unshift(s.substring(0, i));
        res.push(list[j]);
      }


    }

  }

  return res;
};

var isPa = function (str) {

  if (str === '') {
    return true;
  }

  var len = str.length, i = 0;

  for (; i < len / 2 ; i++) {

    if (str[i] !== str[len - 1 - i]) {
      return false;
    }

  }

  return true;

};