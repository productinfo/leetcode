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

// 5/31/2017
const valid = str => {
  let i = 0;
  let j = str.length - 1;
  while (i < str.length && j >= 0) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};
// aab
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = [];
  const len = s.length;
  if (!len) return [[]];
  for (let i = 1; i <= len; i++) {
    const part = s.substring(0, i);
    if (valid(part)) {
      const rest = partition(s.substring(i));
      for (const r of rest) {
        res.push([part, ...r]);
      }
    }
  }
  return res;
};

//3/18/2018
/**
 * @param {string} s
 * @return {string[][]}
 */

const valid = s => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) return false;
  }
  return true;
};
const partition = s => {
  const res = [];
  const l = s.length;
  if (!l) return res;
  const tmp = [];
  const dfs = str => {
    if (!str.length) {
      res.push(tmp.slice());
      return;
    }
    for (let i = 1; i <= str.length; i++) {
      const prefix = str.slice(0, i);
      if (valid(prefix)) {
        tmp.push(prefix);
        dfs(str.slice(i));
        tmp.pop();
      }
    }
  };
  dfs(s);
  return res;
};
