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
