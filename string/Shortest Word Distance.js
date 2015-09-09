/**
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = "coding", word2 = "practice", return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

var shortestDistance = function (words, word1, word2) {

  var len = words.length;

  if (len === 0) return -1;

  var l1 = -1, l2 = -1, max = Number.MAX_VALUE, i = 0;

  for (; i < len ; i++) {

    if (words[i] === word1) {
      l1 = i;
    } else if (words[i] === word2) {
      l2 = i;
    }

    if (l1 >= 0 && l2 >= 0)
    max = Math.min(max, Math.abs(l1 - l2));

  }

  return max === Number.MAX_VALUE ? -1 : max;

};
