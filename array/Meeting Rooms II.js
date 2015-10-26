/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 * For example,
 * Given [[0, 30],[5, 10],[15, 20]],
 * return 2.
 */

var minMeetingRooms = function (intervals) {

  if (!intervals) return 0;

  var len = intervals.length;

  if (len === 0) return 0;

  intervals = intervals.sort(function (a, b) {
    return a.start - b.start;
  });

  var rooms = [], roomIndex, i = 0;

  var findRoom = function (interval) {

    var ll = rooms.length, i = 0;

    for (; i < ll ; i++) {

      if (rooms[i] < interval.start) return i;

    }

    return ll;

  };

  for (; i < len ; i++) {

    roomIndex = findRoom(intervals[i]);
    rooms[roomIndex] = intervals[i].end;

  }

  return rooms.length;

};
