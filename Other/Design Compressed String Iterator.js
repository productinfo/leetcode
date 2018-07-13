class StringIterator {
  constructor(compressedString) {
    const s = [];
    for (let i = 0; i < compressedString.length; i++) {
      if (isNaN(compressedString[i])) {
        s.push(compressedString[i]);
      } else {
        let t = +compressedString[i];
        while (i + 1 < compressedString.length && !isNaN(compressedString[i + 1])) {
          i++;
          t = t * 10 + (+compressedString[i]);
        }
        s.push(t);
      }
    }
    this.s = s;
    this.current = 1;
  }

  next() {
    if (!this.hasNext()) return ' ';
    this.s[this.current] = +this.s[this.current];
    this.s[this.current]--;
    const ans = this.s[this.current - 1];
    if (this.s[this.current] === 0) {
      this.current += 2;
    }
    return ans;
  }

  hasNext() {
    return this.current < this.s.length;
  }
}
