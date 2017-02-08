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

/**
 * 2/25/2016
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  let r = '';
  const f = strs[0];
  const len = f.length;

  for (let i = 0; i < len; i++) {
    if (strs.every((item) => item[i] === f[i])) {
      r += f[i];
    } else {
      break;
    }
  }

  return r;
};

// 9/16/2016
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  if (!len) return '';
  const [first] = strs;
  for (let i = 0; i < first.length; i++) {
    if (!strs.every(str => str[i] === first[i])) {
      return first.substring(0, i);
    }
  }
  return first;
};
