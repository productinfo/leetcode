// 1. generate all abbreviation for target word and put all of them to a queue
// 2. queue are sort by length of each abbreviation from short to long
// 3. compare each abbreviation with each word in dictionary
// 4. if found match then break, go to next one

const generate = w => {
  const res = [];
  const dfs = (str, pos, n) => {
    if (pos === w.length) {
      if (n) str += n;
      res.push(str);
      return;
    }
    dfs(str, pos + 1, n + 1);
    if (n) str += n;
    dfs(str + w[pos], pos + 1, 0);
    str = str.slice(0, str.length - 1);
  };
  dfs('', 0, 0);
  return res;
};

var valid = function(word, abbr) {
  if (!word || !abbr) return false;
  if (abbr.length > word.length) return false;
  let j = 0;
  let i = 0;
  for (; i < abbr.length; i++) {
    if (isNaN(abbr[i])) {
      // letter
      if (abbr[i] !== word[j]) return false;
      j++;
    } else {
      // number
      let t = +abbr[i];
      if (t === 0) return false
      while (i < abbr.length && !isNaN(abbr[i + 1])) {
        t = t * 10 + (+abbr[++i]);
        if (t === 0) return false;
      }
      j += t;
    }
  }
  return j === word.length;
};

/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
  const heap = [];
  const all = generate(target);
  for (const abbr of all) heap.push({ abbr, len: abbr.length });
  heap.sort((a, b) => a.len - b.len);
  while (heap.length) {
    const { abbr, len } = heap.shift();
    if (!dictionary.some(w => valid(w, abbr))) {
      return abbr
    }
    heap.sort((a, b) => a.len - b.len);
  }
  return '';
};

console.log(minAbbreviation('apple', ["plain", "amber", "blade"]));
