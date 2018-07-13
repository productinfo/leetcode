var groupStrings = function(strings) {
  const res = [];
  if (!strings || !strings.length) return res;
  const BASE = 'a'.charCodeAt(0);
  const map = {};
  for (const str of strings) {
    const offset = str.charCodeAt(0) - BASE;
    let k = '';
    for (let j = 0; j < str.length; j++) {
      let c = str.charCodeAt(j) - offset;
      if (c < 97) c += 26;
      k += String.fromCharCode(c);
    }
    map[k] = map[k] || [];
    map[k].push(str);
  }
  return Object.keys(map).reduce((acc, k) => {
    acc.push(map[k]);
    return acc;
  }, []);
};


// 4/28/2018
const conv = str => {
  const BASE = 97;
  const offset = str[0].charCodeAt(0) - BASE;
  let res = '';
  for (const ch of str) {
    let code = ch.charCodeAt(0) - offset;
    if (code < BASE) code += 26;
    res += String.fromCharCode(code)
  }
  return res;
}

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const map = {};
  for (const str of strings) {
    const k = conv(str);
    map[k] = map[k] || [];
    map[k].push(str);
  }
  return Object.keys(map).reduce((acc, k) => {
    acc.push(map[k]);
    return acc;
  }, []);
};

