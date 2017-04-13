class NestedIterator {
  constructor(nestedList) {
    const res = [];
    while (nestedList.length) {
      const iter = nestedList.shift();
      if (iter.isInteger()) {
        res.push(iter.getInteger());
      } else {
        nestedList = iter.getList().concat(nestedList);
      }
    }
    this.res = res;
  }

  hasNext() {
    return !!this.res.length;
  }

  next() {
    const v = this.res.shift();
    return v;
  }
}