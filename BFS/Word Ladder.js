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

  var chars = 'abcdefghijklmnopqrstuvwxyz';

  var q = [];
  q.push(beginWord);
  delete wordDict[beginWord];

  var total = 0;

  while (q.length > 0) {

    var count = q.length;

    for (var i = 0 ; i < count ; i++) {

      var current = q.shift();

      for (var j = 0 ; j < current.length ; j++) {
        for (var c = 0 ; c <= chars.length ; c++) {
          if (chars[c] === current[j]) {
            continue;
          }

          var tmp = current.replace(current[j], chars[c]);

          if (tmp === endWord) {
            return total += 1;
          }

          if (wordDict.hasOwnProperty(tmp)) {
            q.push(tmp);
            delete wordDict[tmp];
          }
        }
      }

    }

    total++;

  }

  return 0;

};