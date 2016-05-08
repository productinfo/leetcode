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
