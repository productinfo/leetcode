var generateAbbreviations = function(word) {
  const res = [];
  const len = word.length;
  const dfs = (pos, cur, count) => {
    if (pos === len) {
      if (count > 0) cur += count;
      res.push(cur);
    } else {
      dfs(pos + 1, cur, count + 1);
      dfs(pos + 1, `${cur}${count > 0 ? `${count}` : ''}${word[pos]}`, 0);
    }
  };
  dfs(0, '', 0);
  return res;
};

//

const generateAbbreviations = w => {
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
