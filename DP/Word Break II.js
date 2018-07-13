/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

  var res = [];

  var l = s.length;

  var wl = wordDict.size;

  if (l === 0 || wl === 0) {
    return res;
  }

  var dp = [];

  dp[0] = [];

  for (var i = 0 ; i < l ; i++) {

    if (!dp[i]) {
      continue;
    }

    for (var j = 0 ; j < wl ; j++) {
      var word = wordDict[j];
      var len = word.length;
      var end = i + len;

      if (end > l) {
        continue;
      }

      if (s.substring(i, end) === word) {

        if (!dp[end]) {
          dp[end] = [];
        }

        dp[end].push(word);

      }

    }

  }

  if (!dp[l]) {
    return res;
  }

  var tmp = [];

  var dfs = function (endOfStr) {

    if (endOfStr <= 0) {

      var x = tmp.join(' ');
      res.push(x);
      return;
    }

    var d = dp[endOfStr];
    var dl = dp[endOfStr].length;

    for (var k = 0 ; k < dl ; k++) {
      tmp.push(d[k]);
      dfs(endOfStr - d[k].length);
      tmp.pop();
    }

  };

  dfs(l);

  return res;

};

// 4/14/2017
const wordBreak = (s, wordDict) => {
  const map = {};
  const go = subs => {
    const list = [];
    if (subs.length === 0) return list;
    if (subs in map) {
      return map[subs];
    }
    if (wordDict.includes(subs)) {
      list.push(subs);
    }
    for (let i = 1; i < subs.length; i++) {
      const t = subs.substring(i);
      if (wordDict.includes(t)) {
        const tmp = go(subs.substring(0, i));
        if (tmp.length) {
          for (let j = 0; j < tmp.length; j++) {
            list.push(`${tmp[j]} ${t}`);
          }
        }
      }
    }
    map[subs] = list;
    return list;
  };
  return go(s);
};

// 4/15/2017
/*
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].
 */

// time from O(n!) to O(2 ^ n)
// space O(n)

const wordBreak = (s, wordDict) => {
  const len = s.length;
  if (!len) return [];
  const map = {};
  const go = (sub) => {
    const list = [];
    if (sub.length === 0) return list;
    if (sub in map) return map[sub];
    if (wordDict.includes(sub)) {
      list.push(sub);
    }
    for (let i = 1; i < sub.length; i++) {
      const rest = sub.substring(i);
      if (wordDict.includes(rest)) {
        const t = go(sub.substring(0, i));
        for (const str of t) {
          list.push(`${str} ${rest}`);
        }
      }
    }
    map[sub] = list;
    return list;
  };
  return go(s);
};

// 6/1/2017
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const l = s.length;
  const map = {};
  const go = str => {
    const list = [];
    if (!str.length) return list;
    if (str in map) return map[str];
    if (wordDict.includes(str)) list.push(str);
    for (let j = 0; j < str.length; j++) {
      const suffix = str.substring(j);
      if (wordDict.includes(suffix)) {
        const res = go(str.substring(0, j));
        for (const w of res) {
          list.push(`${w} ${suffix}`);
        }
      }
    }
    map[str] = list;
    return list;
  };
  return go(s)
};

// Time complexity is O(len(wordDict) ^ len(s / minWordLenInDict)),
// because there're len(wordDict) possibilities for each cut