// use heap

class Point {
  constructor(start, height, isStart) {
    this.start = start;
    this.height = height;
    this.isStart = isStart;
  }
}

class Heap {
  constructor() {
    this.arr = [];
    this.map = {};
  }
  // O(nlogn)
  getMax() {
    this.arr.sort((a, b) => b - a);
    return this.arr[0];
  }
  // O(1)
  add(val) {
    if (val in this.map) {
      this.map[val] += 1;
    } else {
      this.map[val] = 1;
      this.arr.push(val);
    }
  }
  // O(n)
  remove(val) {
    if (val in this.map) {
      this.map[val] -= 1;
      if (this.map[val] === 0) {
        delete this.map[val];
        const index = this.arr.indexOf(val);
        this.arr.splice(index, 1);
      }
    } else {
      return;
    }
  }
}

const getSkyline = buildings => {
  const bs = [];
  for (const b of buildings) {
    bs.push(new Point(b[0], b[2], true));
    bs.push(new Point(b[1], b[2], false));
  }

  // 1. compare this.start
  // 2. if they are the same apply this rules:
  // if two are both start points higher height should be the first
  // if two are both end points lower height should be the first
  // if one start and one end then start should be ahead of end
  bs.sort((p1, p2) => {
    if (p1.start !== p2.start) {
      return p1.start - p2.start;
    } else {
      return (p1.isStart ? -p1.height : p1.height) - (p2.isStart ? -p2.height : p2.height);
    }
  });
  const res = [];
  const heap = new Heap();
  let pvMaxHeight = 0;
  heap.add(0);
  for (const v of bs) {
    // if it is start, add height to the heap
    // if height existed, increment value
    if (v.isStart) {
      heap.add(v.height);
    } else {
      heap.remove(v.height);
    }
    let curMaxHeight = heap.getMax();
    // if previous max height changes
    // add it
    if (pvMaxHeight !== curMaxHeight) {
      res.push([v.start, curMaxHeight]);
      pvMaxHeight = curMaxHeight;
    }
  }

  return res;
};

console.log(getSkyline([
	[1, 3, 4],
	[3, 4, 4],
	[2, 6, 2],
	[8, 11, 4],
	[7, 9, 3],
	[10, 11, 2]
]));

// use pure array to replace heap
class Point {
  constructor(start, height, isStart) {
    this.start = start;
    this.height = height;
    this.isStart = isStart;
  }
}

const getSkyline = buildings => {
  const bs = [];
  for (const b of buildings) {
    bs.push(new Point(b[0], b[2], true));
    bs.push(new Point(b[1], b[2], false));
  }
  // if two are both start points higher height should be the first
  // if two are both end points lower height should be the first
  // if one start and one end then start should be ahead of end
  bs.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start;
    } else {
      return (a.isStart ? -a.start : a.start) - (b.isStart ? -b.start : b.start);
    }
  });
  const res = [];
  let pvMax = 0;
  const heap = [0];
  for (const b of bs) {
    if (b.isStart) {
      if (!heap.includes(b.height)) {
        heap.push(b.height);
      }
    } else {
      const index = heap.indexOf(b.height);
      if (index > -1) {
        heap.splice(index, 1);
      }
    }
    heap.sort((a, b) => b - a);
    const curMax = heap.shift();
    if (pvMax !== curMax) {
      res.push([b.start, curMax]);
      pvMax = curMax;
    }
  }
  return res;
};

/*
  list = list.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start
    } else if (a.isStart && b.isStart) {
      return b.height - a.height;
    } else if (!a.isStart && !b.isStart) {
      return a.height - b.height;
    } else if (a.isStart || b.isStart) {
      return b.isStart - a.isStart;
    }
  });
*/