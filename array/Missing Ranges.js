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

// 9/13/2016
const fb = (nums, start, end) => {
  const res = [];
  const len = nums.length;
  if (!len) return res;
  for (let i = 0; i < len; i++) {
    if (nums[i + 1] && nums[i] + 1 === nums[i + 1]) {
      continue;
    }
    a = nums[i] + 1 || start;
    b = i === len - 1 ? end : nums[i + 1] - 1;
    res.push(print(a, b));
  }
	return res;
};

const print = (start, end) => start === end
  ? `${start}`
  : `${start}->${end}`;


// 10/22/2016
const print = (a, b) => a === b ? `${a}` : `${a}->${b}`;
const f = (arr, s, e) => {
  const res = [];
  let len = arr.length;
  let next = s;
  for (let i = 0; i < len; i++) {
    // not within the range yet
    if (arr[i] < next) continue;
    // continue to find the next one
    if (arr[i] === next) {
      next++;
      continue;
    }
    res.push(print(next, arr[i] - 1));
    next = arr[i] + 1;
  }
  if (next <= e) res.push(print(next, e));
  return res;
};

// 4/27/2018
var findMissingRanges = function(nums, lower, upper) {
  const res = [];
  let pv = lower;
  const print = (a, b) => a === b ? `${a}` : `${a}->${b}`;
  for (const n of nums) {
    if (n < pv) continue;
    if (n === pv) {
      pv = n + 1;
      continue;
    }
    res.push(print(pv, n - 1));
    pv = n + 1;
  }
  if (pv <= upper) res.push(print(pv, upper));
  return res;
};
