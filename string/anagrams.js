/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
  
  var result = [], map = {};

  for (var i = 0 ; i < strs.length ; i++) {

    var key = strs[i].split('').sort().join('');

    if (map.hasOwnProperty(key)) {

      map[key].push(strs[i]);

    } else {

      map[key] = [strs[i]];

    }

  }

  for (var item in map) {

    if (map[item].length > 1) {
      result = result.concat(map[item]);
    }

  }

  return result;

};