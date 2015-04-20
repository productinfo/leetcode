/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs){
  
  var index = 0;

  if (strs.length === 0) {
    return '';
  }

  while (index < strs[0].length) {

    var char = strs[0][index];

    for (var i = 1 ; i < strs.length ; i++) {

      if (index > strs[i].length || strs[i][index] !== char) {
        return strs[0].substring(0, index);
      }

    }

    index += 1;

  }

  return strs[0];

};