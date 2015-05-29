/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {

  if (!beginWord || !endWord || !wordDict || wordDict.length === 0) {
    return 0;
  }

  wordDict.add(endWord);

  var chars = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      charsLen = chars.length,
      wordQ = [beginWord],
      totalQ = [1],
      res = Number.MAX_VALUE,
      i, j;

  while (wordQ.length > 0) {

    var currWord = wordQ.shift();
    var currTotal = totalQ.shift();

    if (currWord === endWord) {
      res = Math.min(res, currTotal);
    }

    var cl = currWord.length;


    for (i = 0 ; i < cl ; i++) {

      for (j = 0 ; j < charsLen ; j++) {

        var newWord = currWord.substring(0, i) + chars[j] + currWord.substring(i + 1);

        if (wordDict.has(newWord)) {

          wordQ.push(newWord);
          totalQ.push(currTotal + 1);
          wordDict.delete(newWord);

        }


      }

    }

  }

  if (res < Number.MAX_VALUE) {
    return res;
  } else {
    return 0;
  }

};