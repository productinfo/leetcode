var findLongestWord = function(s, d) {
  let longest = '';
  for (const str of d) {
    let j = 0;
    for (const ch of s) {
      if (j < str.length && ch === str[j]) j++;
    }
    if (j === str.length && j >= longest.length) {
      if (j === longest.length) {
        longest = [str, longest].sort()[0];
      } else {
        longest = str;
      }
    }
  }
  return longest
};
