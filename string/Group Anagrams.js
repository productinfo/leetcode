/**
 * @param {string[]} strs
 * @return {string[]}
 *
 * Given an array of strings, return all groups of strings that are anagrams.
 */
var groupAnagrams = function(strs) {

  var len = strs.length, res = [];

  if (len === 0) return [];

  var i = 0, key, map = {};

  for (; i < len ; i++) {

    key = strs[i].split('').sort().join();

    if (map.hasOwnProperty(key)) {
      map[key].push(strs[i]);
    } else {
      map[key] = [strs[i]];
    }

  }

  for (var item in map) {
    res.push(map[item].sort());
  }

  return res;

};

// 3/28/2016
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var r = [];
  var len = strs.length;
  var map = {};
  var word;
  var key;

  while (len--) {
    word = strs[len];
    key = word.split('').sort().join('');
    map.hasOwnProperty(key) ? map[key].push(word) : map[key] = [word];
  }

  Object.keys(map).forEach(function (item) {
    r.push(map[item].sort());
  });

  return r;
};

// 9/15/2016
var groupAnagrams = function(strs) {
  const len = strs.length;
  if (!len) return [];
  const map = {};
  for (let i = 0; i < len; i++) {
    const k = strs[i].split('').sort().join('');
    if (map[k]) {
      map[k].push(strs[i]);
    } else {
      map[k] = [strs[i]];
    }
  }
  return Object.keys(map).reduce((acc, k) => {
    acc.push(map[k]);
    return acc;
  }, []);
};

// 11/26/2016
const groupAnagrams = strs => {
  const map = {};
  for (let l = strs.length, i = 0; i < l; i++) {
    const key = strs[i].split('').sort().join('');
    if (map[key]) {
      map[key].push(strs[i]);
    } else {
      map[key] = [strs[i]];
    }
  }
  return Object.keys(map).reduce((result, key) => (result.push(map[key]), result),[])
};

// 4/9/2016
const groupAnagrams = strs => {
  const map = {};
  for (str of strs) {
    const key = str.split('').sort().join('')
    if (key in map) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }
  return Object.keys(map).reduce((res, key) => {
    res.push(map[key])
    return res;
  }, []);
};
