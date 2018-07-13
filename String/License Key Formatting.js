var licenseKeyFormatting = function(S, K) {
  const group = S.split('-').map(ch => ch.toUpperCase());
  const len = group.reduce((t, s) => t + s.length, 0);
  const first = len % K;
  let str = group.join('');
  const tmp = [];
  if (first !== 0) {
    tmp.push(str.slice(0, first));
    str = str.slice(first)
  }
  for (let j = 0; j < str.length; j += K) {
    tmp.push(str.slice(j, j + K));
  }
  return tmp.join('-');
};

var licenseKeyFormatting = function(S, K) {
  let count = 0;
  let res = '';
  for (let j = S.length - 1; j >= 0; j--) {
    if (S[j] !== '-') {
      if (count === K) {
        res = '-' + res;
        count = 0;
      }
      res = S[j].toUpperCase() + res;
      count++;
    }
  }
  return res;
};

var licenseKeyFormatting = function(S, K) {
  const res = [];
  let tmp = '';
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] !== '-') {
      tmp = S[i] + tmp;
    }
    if (tmp.length === K) {
      res.unshift(tmp.toUpperCase());
      tmp = '';
    }
  }
  if (tmp) res.unshift(tmp.toUpperCase());
  return res.join('-');
};
