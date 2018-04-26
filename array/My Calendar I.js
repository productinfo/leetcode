class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class MyCalendar {
  constructor() {
    this.classes = [];
  }

  book(start, end) {
    const clx = new Interval(start, end);
    for (const item of this.classes) {
      if (
        Math.max(item.start, clx.start) < Math.min(item.end, clx.end)
      ) return false;
    }
    this.classes.push(clx);
    return true;
  }
}
