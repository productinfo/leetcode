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
    
  var len = intervals.length, result = [], temp = newInterval;

  for (var i = 0 ; i < len ; i++) {

    if (intervals[i].end < temp.start) {
      result.push(intervals[i]);
    } else if (temp.end < intervals[i].start) {
      result.push(temp);
      temp = intervals[i];
    } else {
      temp = new Interval(Math.min(temp.start, intervals[i].start), Math.max(temp.end, intervals[i].end));
    }

  }
  
  result.push(temp);

  return result;

};