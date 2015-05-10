
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var find = function (intervals) {

  var len = intervals.length;

  var r = [], pv, cur;

  for (var i = 1 ; i < len ; i++) {

    pv = intervals[i - 1];
    cur = intervals[i];

    if (pv.end > cur.start) {
      r.push(new Interval(cur.start, pv.end));
    }

  }

  return r;

};