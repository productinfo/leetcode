class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
  if (!s) return '';
  if (!dict || dict.length === 0) return s;
  // 1. find intervals
  const intervals = [];
  for (const str of dict) {
    let index = s.indexOf(str, 0);
    while (index !== -1) {
      intervals.push(new Interval(index, index + str.length));
      index = s.indexOf(str, index + 1);
    }
  }
  console.log(intervals);
  // 2. combine intervals
  intervals.sort((a, b) => a.start - b.start);
  let p1 = 0;
  for (let p2 = 1; p2 < intervals.length; p2++) {
    if (intervals[p1].end >= intervals[p2].start) {
      // merge
      intervals[p1].start = Math.min(intervals[p1].start, intervals[p2].start);
      intervals[p1].end = Math.max(intervals[p1].end, intervals[p2].end);
    } else {
      // no merge
      p1++;
      intervals[p1].start = intervals[p2].start;
      intervals[p1].end = intervals[p2].end;
    }
  }
  // 3. output result
  const tmp = intervals.slice(0, p1 + 1);
  let res = '';
  let prev = 0;
  for (const iter of tmp) {
    res += s.slice(prev, iter.start);
    res += `<b>${s.slice(iter.start, iter.end)}</b>`;
    prev = iter.end;
  }
  if (prev < s.length) res += s.slice(prev);
  return res;
};
