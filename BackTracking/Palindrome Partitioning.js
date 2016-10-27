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

  for (; i < len >> 1 ; i++) {

    if (str[i] !== str[len - 1 - i]) {
      return false;
    }

  }

  return true;

};

// 9/23/2016
var partition = function(s) {
  const len = s.length;
  if (!len) return [[]];
  const res = [];
  for (let i = 1; i <= len; i++) {
    const str = s.substring(0, i);
    if (isPartition(str)) {
      const rest = partition(s.substring(i));
      rest.forEach(arr => {
        arr.unshift(str);
        res.push(arr);
      });
    }
  }
  return res;
};

const isPartition = s => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
