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

// TIME OUT
// Time Complexity - O(n * 26^L)，  Space Complexity - O(n * 26^L)
// BFS (Queue)
const ladderLength = (beginWord, endWord, wordList) => {
  let level = 1;
  const q = [beginWord];
  wordList.push(endWord);
  const bi = wordList.indexOf(beginWord);
  wordList.splice(bi, 1);
  const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const w = q.shift();
      if (w === endWord) return level;
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < char.length; j++) {
          const newWord = `${w.substring(0, i)}${char[j]}${w.substring(i + 1)}`;
          const index = wordList.indexOf(newWord);
          if (index > -1) {
            q.push(newWord);
            wordList.splice(index, 1);
          }
        }
      }
    }
    level += 1;
  }
  return 0;
};

// 5/31/2017
/**
  TIMEOUT
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let level = 1;
  // wordList.push(endWord);
  const i = wordList.indexOf(beginWord);
  if (i > -1) wordList.splice(i, 1);
  const q = [beginWord];
  const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
  while (q.length) {
    const size = q.length;
    for (let v = 0; v < size; v++) {
      const w = q.shift();
      if (w === endWord) return level;
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < char.length; j++) {
          const nw = `${w.substring(0, i)}${char[j]}${w.substring(i + 1)}`;
          const k = wordList.indexOf(nw);
          if (k > -1) {
            q.push(nw);
            wordList.splice(k, 1);
          }
        }
      }
    }
    level++;
  }
  return 0;
};

// 6/9/2017
var ladderLength = function(beginWord, endWord, wordList) {
  let level = 1;
  const i = wordList.indexOf(beginWord);
  if (i > -1) wordList.splice(i, 1);
  const q = [beginWord];
  const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
  while (q.length) {
    const size = q.length;
    for (let v = 0; v < size; v++) {
      const w = q.shift();
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < char.length; j++) {
          const nw = `${w.substring(0, i)}${char[j]}${w.substring(i + 1)}`;
          if (nw === endWord && wordList.includes(nw)) return level + 1;
          const k = wordList.indexOf(nw);
          if (k > -1) {
            q.push(nw);
            wordList.splice(k, 1);
          }
        }
      }
    }
    level++;
  }
  return 0;
};