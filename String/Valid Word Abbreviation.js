var validWordAbbreviation = function(word, abbr) {
  if (!word || !abbr) return false;
  if (abbr.length > word.length) return false;
  let j = 0;
  let i = 0;
  for (; i < abbr.length; i++) {
    if (isNaN(abbr[i])) {
      // letter
      if (abbr[i] !== word[j]) return false;
      j++;
    } else {
      // number
      let t = 0;
      while (i < abbr.length && !isNaN(abbr[i])) {
        t = t * 10 + (+abbr[i++]);
        if (t === 0) return false;
      }
      j += t;
      i--;
    }
  }
  return j === word.length;
};

//
var validWordAbbreviation = function(word, abbr) {
  if (!word || !abbr) return false;
  if (abbr.length > word.length) return false;
  let j = 0;
  let i = 0;
  for (; i < abbr.length; i++) {
    if (isNaN(abbr[i])) {
      // letter
      if (abbr[i] !== word[j]) return false;
      j++;
    } else {
      // number
      let t = +abbr[i];
      if (t === 0) return false
      while (i + 1 < abbr.length && !isNaN(abbr[i + 1])) {
        t = t * 10 + (+abbr[++i]);
      }
      j += t;
    }
  }
  return j === word.length;
};
