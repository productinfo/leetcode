/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its missing ranges.
 * For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]
 */

function Range(start, end) {
  this.start = start;
  this.end = end;
}

Range.prototype.toString = function () {
  return this.start === this.end ? this.start + '' : this.start + '->' + this.end;
};  

var findMissingRanges = function (nums, start, end) {

  var l = nums.length,
      res = [], i = 0,
      cur = new Range(start, end);

  for (; i < l ; i++) {

    if (nums[i] > cur.end) break;

    if (nums[i] >= cur.start) {

      var r = new Range(cur.start, nums[i] - 1);

      if (r.end >= r.start) res.push(r.toString());

      cur.start = nums[i] + 1;

    }

  }

  if (cur.end >= cur.start) res.push(cur.toString());

  return res;

};
