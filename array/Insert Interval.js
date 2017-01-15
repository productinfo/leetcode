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

// 11/6/2016
const insert = (ins, iv) => {
  let i = 0 ;
  // sort
  while (i < ins.length && ins[i].end < iv.start) {
    i++;
  }
  while (i < ins.length && iv.end >= ins[i].start) {
    iv.start = Math.min(iv.start, ins[i].start);
    iv.end = Math.max(iv.end, ins[i].end);
    ins.splice(i, 1);
  }
  ins.splice(i, 0, iv);
  return ins;
};
