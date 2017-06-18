// many courner case
// '00'
// '10'
// '11'

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

  if (s === undefined) {
    return 0;
  }

  var l = s.length;

  if (l === 0) {
    return 0;
  }

  var i;
  var dp = [1];
  dp[1] = s[0] === '0' ? 0 : 1;

  for (i = 2 ; i <= l ; i++) {
    dp[i] = 0;
  }

  for (i = 2 ; i <= l ; i++) {

    if (s[i - 1] !== '0') {
      dp[i] = dp[i - 1];
    }

    var twoD = parseInt(s[i - 2], 10) * 10 + parseInt(s[i - 1]);

    if (twoD >= 10 && twoD <= 26) {
      dp[i] += dp[i - 2];
    }

  }

  return dp[l];

};

// 9/15/2016
var numDecodings = function(s) {
  const len = s.length;
  if (!len) return 0;
  const dp = Array.from({ length: len }, _ => 0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  for (let i = 2; i <= len; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    const sum = +s[i - 2] * 10 + +s[i - 1];
    if (sum >= 10 && sum <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[len];
};

// 3/28/2017
const getValue = (d1, d2) => +d1 * 10 + (+d2);
const numDecodings = s => {
  const len = s.length;
  if (!len) return 0
  const dp = [1, s[0] === '0' ? 0 : 1];
  for (let i = 2; i <= len; i++) {
    dp[i] = s[i - 1] === '0' ? 0 : dp[i - 1];
    const val = getValue(s[i - 2], s[i - 1]);
    if (9 < val && val < 27) dp[i] += dp[i - 2];
  }
  return dp[len];
};

// no array
const getValue = (d1, d2) => +d1 * 10 + (+d2);
const numDecodings = s => {
  const len = s.length;
  if (!len) return 0
  let v1 = 1;
  let v2 = s[0] === '0' ? 0 : 1;
  if (len === 1) return v2;
  let v3 = 0;
  for (let i = 2; i <= len; i++) {
    v3 = s[i - 1] === '0' ? 0 : v2;
    const val = getValue(s[i - 2], s[i - 1]);
    if (9 < val && val < 27) v3 += v1;
    v1 = v2;
    v2 = v3;
  }
  return v3;
};

// 6/1/2017
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const l = s.length;
  if (!l) return 0;
  let v1 = 1;
  let v2 = s[0] === '0' ? 0 : 1;
  if (l === 1) return v2;
  const get = (m, n) => +m * 10 + +n;
  let v3 = 0;
  for (let i = 2; i <= l; i++) {
    v3 = s[i - 1] !== '0' ? v2 : 0;
    const val = get(s[i - 2], s[i - 1]);
    if (val > 9 && val < 27) v3 += v1;
    v1 = v2;
    v2 = v3;
  }
  return v3;
};