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

  var dp = [[]];

  for (var i = 0 ; i < l ; i++) {

    if (!dp[i]) {
      continue;
    }

    for (let word of wordDict) {

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