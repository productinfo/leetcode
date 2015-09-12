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
