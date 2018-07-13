class ValidWordAbbr {
  constructor(list) {
    const map = {};
    for (const str of list) {
      const k = this.convert(str);
      map[k] = map[k] || [];
      map[k].push(str);
    }
    this.map = map;
  }

  convert(w) {
    return `${w.slice(0, 1)}${w.slice(1, w.length - 1).length}${w.slice(w.length - 1, w.length)}`;
  }

  isUnique(w) {
    const k = this.convert(w);
    if (k in this.map) {
      if (this.map[k].some(word => word !== w)) {
        return false;
      }
    }
    return true;
  }
}
