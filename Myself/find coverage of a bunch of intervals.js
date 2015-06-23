function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @returns {number}
 */
var merge = function(intervals) {

  var total = 0;

  var len = intervals.length;

  if (len === 0) {
    return total;
  }

  intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  var i = 1;
  var pv = intervals[0];

  for (; i < len ; i++) {

    var cur = intervals[i];

    if (cur.start <= pv.end) {

      // has overlap, merge and push
      pv.end = Math.max(cur.end, pv.end);

      total += (pv.end - pv.start);
      
    } else {

      pv = cur;

      total += (cur.end - cur.start);

    }

  }

  return total;
};

var i1 = new Interval(-2, 3);
var i2 = new Interval(1, 4);
var i3 = new Interval(9, 10);

// [1,3],[2,6],[8,10],[15,18]

var a1 = new Interval(1, 3);
var a2 = new Interval(2, 6);
var a3 = new Interval(8, 10);
var a4 = new Interval(15, 18);

console.log(merge([i1, i2, i3]));
console.log(merge([a1, a2, a3, a4]));