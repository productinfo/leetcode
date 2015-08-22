/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @returns {Interval[]}
 */
var merge = function(intervals) {

  var len = intervals.length;

  if (len === 0) {
    return [];
  }

  intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  var i = 1, result = [], pv = intervals[0];

  for (; i < len ; i++) {

    var cur = intervals[i];

    if (cur.start <= pv.end) {

      // has overlap, merge and push
      pv = new Interval(Math.min(cur.start, pv.start), Math.max(cur.end, pv.end));

    } else {

      // push
      result.push(pv);
      pv = cur;

    }

  }

  result.push(pv);

  return result;
};
