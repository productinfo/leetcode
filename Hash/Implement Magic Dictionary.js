class MagicDictionary {
  constructor() {
    this.map = {};
  }

  buildDict(dict) {
    // map
    // key, len
    // value, list of words
    for (const w of dict) {
      const l = w.length;
      this.map[l] = this.map[l] || [];
      this.map[l].push(w);
    }
  }

  diff(w1, w2) {
    let diff = 0;
    for (let j = 0; j < w1.length; j++) {
      if (w1[j] !== w2[j]) diff++;
    }
    return diff;
  }

  search(word) {
    // iterate all dict
    // find every word with same length
    // see if they are only 1 diff
    const l = word.length;
    if (l in this.map) {
      return this.map[l].some(w => this.diff(w, word) === 1);
    } else {
      return false;
    }
  }
}
