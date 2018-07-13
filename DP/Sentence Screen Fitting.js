// TIME OUT
var wordsTyping = function(sentence, rows, cols) {
  let time = 0;
  let j = 0;
  const len = sentence.length;
  // debugger;
  for (let y = 0; y < rows; y++) {
    let cur = '';
    while ((cur.length + sentence[j].length) <= cols) {
      cur += sentence[j++];
      if (cur.length + 1 <= cols) cur += '-';
      if (j === len) {
        j = 0;
        time++;
      }
    }
    while (cur.length !== cols) {
      cur += '-';
    }
  }
  return time;
};

var wordsTyping = function(sentence, rows, cols) {
  const s = sentence.join(' ') + ' ';
  let count = 0;
  const len = s.length;
  for (let i = 0; i < rows; i++) {
    count += cols;
    if (s[count % len] === ' ') {
      count++;
    } else {
      while (count > 0 && s[(count - 1) % len] !== ' ') {
        count--;
      }
    }
  }
  return (count / len) >> 0
};
