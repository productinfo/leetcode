var shortestWordDistance = function(words, word1, word2) {
  let min = words.length;
  let c1 = -1;
  let c2 = -1;
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i] === word1 && words[i] === word2)
    if (words[i] === word1 && words[i] === word2) {
      if (c1 !== -1 && c2 !== -1) {
        if (Math.abs(i - c1) > Math.abs(i - c2)) {
          c1 = i;
        } else {
          c2 = i;
        }
      } else if (c1 === -1) {
        c1 = i;
      } else {
        c2 = i;
      }
    } else if (words[i] === word1) {
      c1 = i;
    } else if (words[i] === word2) {
      c2 = i;
    }
    if (c1 !== -1 && c2 !== -1) {
      // console.log(c1, c2)
      min = Math.min(min, Math.abs(c1 - c2));
    }
  }
  return min;
};

var shortestWordDistance = function(words, word1, word2) {
  let min = words.length;
  let c1 = -1;
  let c2 = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) c1 = i;
    if (words[i] === word2) {
      if (word1 === word2) c1 = c2;
      c2 = i;
    }
    if (c1 !== -1 && c2 !== -1) min = Math.min(min, Math.abs(c1 - c2));
  }
  return min;
};
