
// time: O(dict size * length of str)

/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    var l = s.length;

    if (l === 0 || wordDict.length === 0) {
        return false;
    }

    var t = [true];

    for (var i = 0 ; i < l ; i++) {

        if (!t[i]) {
            continue;
        }

        for (var j = 0 ; j < wordDict.length ; j++) {

            var len = wordDict[j].length;
            var end = i + len;

            if (end > l) {
                continue;
            }

            if (t[end]) {
                continue;
            }

            if (s.substring(i, end) === wordDict[j]) {
                t[end] = true;
            }

        }

    }

    return t[l];

};

// 4/14/2017
const wordBreak = (s, wordDict) => {
  const dp = [true];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return !!dp[s.length];
};