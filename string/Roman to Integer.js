/**
 * @param {string} s
 * @return {number}
 */
var map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

var romanToInt = function(s) {

    if (!s) return -1;
    var len = s.length;
    if (len === 0) return 0;

    var i = 0, total = 0;

    for (; i < len ; i++) {

        total += map[s[i]];

        if (i > 0 && map[s[i]] > map[s[i - 1]]) {
            total -= 2 * map[s[i - 1]];
        }

    }

    return total;

};

//9/16/2016
var map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
var romanToInt = function(s) {
  const len = s.length;
  if (!len) return -1;
  const res = 0;
  for (let i = 0; i < len; i++) {
    res += map[s[i]];
    if (i > 0 && map[s[i - 1]] > map[s[i]]) res -= 2 * map[s[i - 1]];
  }
  return res;
};
