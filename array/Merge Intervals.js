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

// 3/27/ 2016
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {

  var len = intervals.length;
  var r = [];

  if (len === 0) {
    return r;
  }

  intervals = intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  var pv = intervals[0], i = 1, cur;

  for (; i < len; i++) {
    cur = intervals[i];
    if (pv.end >= cur.start) {
      pv = new Interval(Math.min(pv.start, cur.start), Math.max(pv.end, cur.end));
    } else {
      r.push(pv);
      pv = cur;
    }
  }

  r.push(pv);

  return r;
};

// no extra space

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {

  var len = intervals.length;

  if (len === 0) {
    return intervals;
  }

  intervals = intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  var index = 0, i = 1;

  for (; i < len; i++) {

    if (intervals[index].end >= intervals[i].start) {
      intervals[index].end = Math.max(intervals[index].end, intervals[i].end);
    } else {
      index++;
      intervals[index].start = intervals[i].start;
      intervals[index].end = intervals[i].end;
    }

  }

  return intervals.slice(0, index + 1);

};
