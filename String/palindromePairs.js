// TIMEOUT
const isp = str => {
  let i = 0;
  let j = str.length - 1;
  while (i < str.length && j >= 0) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const len = words.length;
  const map = {};
  const x = (x, y) => {
    const w = words[x] + words[y];
    if (isp(w)) {
      map[w] = map[w] || [];
      map[w].push([x, y]);
    }
  };
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      x(i, j);
      x(j, i);
    }
  }
  return Object.keys(map).reduce((res, k) => {
    res.push(...map[k]);
    return res;
  }, []);
};

console.log(
  palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])
);

// 6/18/2017
const isp = str => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--]) return false;
  }
  return true;
};

var palindromePairs = function(words) {
  const res = [];
  const len = words.length;
  if (!len) return res;
  const map = {};
  for (let i = 0; i < len; i++) {
    map[words[i]] = i;
  }
  // console.log(map);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= words[i].length; j++) {
      const left = words[i].substring(0, j);
      const right = words[i].substring(j);
      if (isp(left)) {
        const rev = right.split('').reverse().join('');
        if (rev in map && map[rev] !== i) {
          // console.log(rev);
          res.push([map[rev], i]);
        }
      }
      if (isp(right)) {
        const rev = left.split('').reverse().join('');
        if (rev in map && map[rev] !== i && right.length !== 0) {
          res.push([i, map[rev]]);
        }
      }
    }
  }
  return res;
};