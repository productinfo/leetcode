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

// use heap
// 4/4/2017
const minMeetingRooms = intervals => {
  const len = intervals.length;
  if (!len) return 0;
  intervals = intervals.sort((a, b) => a.start - b.start);
  let q = [intervals[0].end];
  for (let i = 1; i < len; i++) {
    q = q.sort((a, b) => a - b);
    if (intervals[i].start >= q[0]) {
        q.shift();
    }
    q.push(intervals[i].end);
  }
  return q.length;
};

// 6/3/2017
/**
 total // O(nlogn)
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const len = intervals.length;
  if (!len) return 0;
  // O(nlogn)
  intervals = intervals.sort((a, b) => a.start - b.start);
  const h = new Heap();
  // O(1)
  h.add(intervals[0].end);
  // O(n)
  for (let i = 1; i < len; i++) {
    // O(logn)
    if (intervals[i].start >= h.getMin()) h.remove();
    // O(logn)
    h.add(intervals[i].end);
  }
  return h.total();
};