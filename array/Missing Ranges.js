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

// 4/6/2016


class Range {
  constructor(s, e, x, y) {
    this.s = s;
    this.e = e;
		this.x = x;
		this.y = y;
  }

	output() {
		if (this.e - this.s === 2) {
			return `${this.e - this.s}`;
		} else {
			return `${this.s === this.x ? this.s : this.s + 1} -> ${this.e === this.y ? this.e : this.e - 1}`;
		}
	}
}

const z = (n, s, e) => {

  const len = n.length, r = [];

  for (let i = 0; i < len; i++) {

    if (i === 0 && s < n[i]) {
      r.push(new Range(s, n[i], s, e).output());
    } else if (i === len - 1 && n[i] < e) {
      r.push(new Range(n[i], e, s, e).output());
    } else if (n[i + 1] - n[i] > 1) {
      r.push(new Range(n[i], n[i + 1], s, e).output());
    }

  }

	return r;

};

console.log(z([0, 1, 3, 50, 75], 0, 99));
