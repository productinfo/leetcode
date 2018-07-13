var isStrobogrammatic = function(num) {
  const map = {
    '6': '9',
    '9': '6',
    '0': '0',
    '1': '1',
    '8': '8'
  };
  let r = '';
  for (const ch of num) {
    r = map[ch] + r;
  }
  return r === num;
};

var isStrobogrammatic = function(num) {
  const map = {
    '6': '9',
    '9': '6',
    '0': '0',
    '1': '1',
    '8': '8'
  };
  let l = 0;
  let h = num.length - 1;
  while (l <= h) {
    if (!(num[l] in map)) return false;
    if (map[num[l]] !== num[h]) return false;
    l++;
    h--;
  }
  return true;
};
