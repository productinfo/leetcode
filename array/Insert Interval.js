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

// 3/27/2016
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
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  var index = 0;

  while (index < intervals.length &&  intervals[index].end < newInterval.start) {
    index++;
  }

  while (index < intervals.length && intervals[index].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(intervals[index].start, newInterval.start),
      Math.max(intervals[index].end, newInterval.end)
    );
    intervals.splice(index, 1);
  }

  intervals.splice(index, 0, newInterval);

  return intervals;
};
