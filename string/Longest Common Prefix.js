/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  if (!strs) return '';

	var len = strs.length;

	if (len === 0) return '';

	var first = strs[0], i, fl = first.length, index = 0;

  while (index < fl) {

		for (i = 1; i < len ; i++) {
			if (strs[i][index] !== first[index] || index > strs[i].length) {
        return first.substring(0, index);
      }
		}

		index++;

	}

	return first;
};
