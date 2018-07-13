class WordDistance {
  constructor(words) {
    const map = {};
    for (let i = 0; i < words.length; i++) {
      map[words[i]] = map[words[i]] || [];
      map[words[i]].push(i);
    }
    this.map = map;
  }

  shortest(w1, w2) {
    const l1 = this.map[w1];
    const l2 = this.map[w2];
    let i = 0;
    let j = 0;
    let min = Infinity
    while (i < l1.length && j < l2.length) {
      min = Math.min(min, Math.abs(l1[i] - l2[j]));
      if (l1[i] < l2[j]) {
        i++;
      } else {
        j++;
      }
    }
    return min;
  }
}
