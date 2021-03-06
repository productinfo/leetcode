var map = {
  'A': 01,
  'B': 02,
  'C': 03,
  'D': 04,
  'E': 05,
  'F': 06,
  'G': 07,
  'H': 08,
  'I': 09,
  'J': 10,
  'K': 11,
  'L': 12,
  'M': 13,
  'N': 14,
  'O': 15,
  'P': 16,
  'Q': 17,
  'R': 18,
  'S': 19,
  'T': 20,
  'U': 21,
  'V': 22,
  'W': 23,
  'X': 24,
  'Y': 25,
  'Z': 26
};

var titleToNumber = function(s) {

  var len = s.length;

  if (len === 0) return 0;

  var total = 0, i, p = 1;

  for (i = len - 1 ; i >= 0 ; i--) {

		total += map[s[i]] * p;

    p *= 26;

  }

	return total;

};

var titleToNumber = function(s) {

	var len = s.length;

	if (len === 0) {
		return 0;
	}

	var index = 0;
	var total = 0;

  while(len--) {
		total += Math.pow(26, index++) * map[s[len]];
	}

	return total;

};

var titleToNumber = function(s) {

	var len = s.length;

	if (len === 0) {
		return 0;
	}

	var index = 1;
	var total = 0;

  while(len--) {
    total += map[s[len]] * index;
		index *= 26;
	}

	return total;

};

// 9/21/2016
var titleToNumber = function(s) {
  let len = s.length;
  if (!len) return -1;
  let t = 0;
  let b = 0;
  while (len--) {
    t += (Math.pow(26, b++) * map[s[len]]);
  }
  return t;
};

// 3/30/2017
const titleToNumber = s => {
  let t = 0;
  let k = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    t += (map[s[i]] * Math.pow(26, k++));
  }
  return t;
};
