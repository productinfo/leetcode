/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @returns {Interval[]}
 */

var insert = function(intervals, newInterval) {

  var len = intervals.length, result = [];

  for (var i = 0 ; i < len ; i++) {

    if (intervals[i].end < newInterval.start) {
      result.push(intervals[i]);
    } else if (newInterval.end < intervals[i].start) {
      result.push(newInterval);
      newInterval = intervals[i];
    } else {
      newInterval = new Interval(Math.min(newInterval.start, intervals[i].start), Math.max(newInterval.end, intervals[i].end));
    }

  }

  result.push(newInterval);

  return result;

};
