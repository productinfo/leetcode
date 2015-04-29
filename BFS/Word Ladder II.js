/**
 * @param {string} start
 * @param {string} end
 * @param {set} dict
 * @return {string[][]}
 */
var findLadders = function(start, end, dict) {

  if (!beginWord || !endWord || !wordDict || dict.length === 0) {
    return 0;
  }

  var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var charsLen = chars.length;

  dict.add(endWord);

  var wordQ = [];

  wordQ.push(beginWord);

  var res = [];
  var i, j;

  while (wordQ.length > 0) {

    var currWord = wordQ.shift();

    if (currWord === endWord) {
      // res = Math.min(res, currTotal);
    }

    var cl = currWord.length;


    for (i = 0 ; i < cl ; i++) {

      for (j = 0 ; j < charsLen ; j++) {

        var newWord = currWord.substring(0, i) + chars[j] + currWord.substring(i + 1);

        if (dict.has(newWord)) {
          wordQ.push(newWord);
          dict.delete(newWord);
        }


      }

    }

  }

  return res;

};