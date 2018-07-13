// TIMEOUT
const isp = str => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (!s || !s.length || isp(s)) return true;
  for (let i = 0; i < s.length; i++) {
    if (isp(`${s.slice(0, i)}${s.slice(i + 1)}`)) return true;
  }
  return false;
};

console.log(validPalindrome('abca'))

// 5/22/2018
const isp = str => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (!s || !s.length || isp(s)) return true;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return isp(`${s.slice(0, i)}${s.slice(i + 1)}`) || isp(`${s.slice(0, j)}${s.slice(j + 1)}`);
    }
    i++;
    j--;
  }
  return true;
};

var validPalindrome = function(s) {
  if (!s || !s.length) return true;
  const isp = (a, b) => {
    while (a < b) {
      if (s[a++] !== s[b--]) return false;
    }
    return true;
  };
  let i = 0;
  let j = s.length - 1;
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  return isp(i + 1, j) || isp(i, j - 1);
};

// 6/8/2018
var validPalindrome = function(s) {
  if (!s || !s.length) return true;
  const isp = str => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i++] !== str[j--]) return false;
    }
    return true;
  };
  let m = 0;
  let n = s.length - 1;
  while (m < n && s[m] === s[n]) {
    m++;
    n--;
  }
  return isp(`${s.slice(0, m)}${s.slice(m + 1)}`) || isp(`${s.slice(0, n)}${s.slice(n + 1)}`);;
};
