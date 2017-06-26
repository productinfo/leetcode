/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
 *
 * Given [[0, 30],[5, 10],[15, 20]],
 * return false.
 */

var canAttendMeetings = function (intervals) {

  var (!intervals) return false;

  var len = intervals.length, i = 0, m = 0;

  if (len === 0) return false;

  intervals = intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  for (; i < len ; i++) {

    if (intervals[i].start < m) return false;

    m = Math.max(m, intervals[i].end);

  }

  return true;

};

// 4/4/2017
const canAttendMeetings = intervals => {
  const len = intervals.length;
  if (!len) return true;
  intervals = intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < len; i++) {
    const cur = intervals[i];
    const pv = intervals[i - 1];
    if (cur.start < pv.end) return false;
  }
  return true;
};

const canAttendMeetings = intervals => {
  if (intervals.length < 2) return true;
  intervals = intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) return false;
  }
  return true;
};
