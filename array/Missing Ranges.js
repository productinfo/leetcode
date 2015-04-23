/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its missing ranges.
 * For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]
 */

var findMissingRanges = function (nums, start, end) {

  var pv = start - 1;
  var l = nums.length;
  var i = 0;
  var cur;
  var res = [];

  for (; i <= l ; i++) {

    cur = i === l ? end + 1 : nums[i];

    if (cur - pv >= 2) {
      res.push(getRange(pv + 1, cur - 1));
    }

    pv = cur;

  }

  return res;

};

var getRange = function (from, to) {
  return from === to ? (from + '') : (from + '->' + to);
};