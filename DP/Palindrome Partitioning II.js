/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(str) {
    
  var min = Number.MAX_VALUE;

  var go = function (s) {

    var i = 1;

    var len = s.length;

    if (len === 0) {
      return [];
    }

    for (; i <= len ; i++) {

      if (isPa(s.substring(0, i))) {

        var list = go(s.substring(i));
        var l2 = list.length;

        for (var j = 0 ; j < l2 ; j++) {
          list[j].unshift(s.substring(0, i));
          if (list[j].length - 1 < min) {
            min = list[j].length - 1;
          }
        }


      }

    }

  };

  go(str);

  return min;

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