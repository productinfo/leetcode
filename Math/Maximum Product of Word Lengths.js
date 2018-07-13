var maxProduct = function(words) {
  let res = 0;
  if (!words.length) return res;
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    const map = {};
    for (const ch of words[i]) {
      map[ch] = map[ch] || 0;
    }
    for (let j = i + 1; j < words.length; j++) {
      let valid = true;
      for (const ch of words[j]) {
        if (ch in map) {
          valid = false
          break;
        }
      }
      if (valid) {
        max = Math.max(
          max, words[i].length * words[j].length
        )
      }
    }
  }
  return max;
};
