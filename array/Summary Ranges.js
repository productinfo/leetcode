/**
 * use helper function
 */
 var print = function (start, end) {
   return start === end ? start + '' : start + '->' + end;
 };

 /**
  * @param {number[]} nums
  * @return {string[]}
  */
 var summaryRanges = function(nums) {

   var res = [];

   if (!nums) return res;

   var len = nums.length;

   if (len === 0) return res;

   var i = 0, start = 0;

   for (; i < len - 1 ; i++) {

     while (nums[i] + 1 === nums[i + 1] && i < len) i++;

     res.push(print(nums[start], nums[i]));

     start = i + 1;

   }

   if (start < len) res.push(print(nums[start], nums[i]));

   return res;

 };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

  var res = [];

  if (!nums) return res;

  var len = nums.length;

  if (len === 0) return res;

  if (len === 1) return [nums[0] + ''];

  var start = 0, i = 0;

  for (; i < len - 1 ; i++) {

    while (nums[i] + 1 === nums[i + 1]) i++;

    res.push(start === i ? (nums[start] + '') : (nums[start] + '->' + nums[i]));

    start = i + 1;

  }

  if (nums[start]) res.push(start === i ? (nums[start] + '') : (nums[start] + '->' + nums[i]));

  return res;

};

// 4/7/2016
const print = (m, n) => {
	return m === n ? `${m}` : `${m}->${n}`;
};

const z = (n) => {

	const len = n.length, r = [];
	let s = 0, i = 0;
	for (; i < len - 1; i++) {

		while (n[i] + 1 === n[i + 1] && i < len) {
			i++
		}

		r.push(print(n[s], n[i]));
		s = i + 1;
	}

  if (s < len) {
		r.push(print(n[s], n[i]));
	}

	return r;
};

// 9/13/2016
var summaryRanges = function(nums) {
  const res = [];
  const len = nums.length;
  if (!len) return res;
  if (len === 1) return [print(nums[0], nums[0])];
  let start = nums[0];
  for (let i = 0; i < len; i++) {
    if (nums[i + 1] && nums[i] + 1 === nums[i + 1]) {
      continue;
    }
    res.push(print(start, nums[i]));
    start = nums[i + 1];
  }
	return res;
};

const print = (start, end) => start === end
  ? `${start}`
  : `${start}->${end}`;

// 10/24/2016
const print = (s, e) => s === e ? `${s}` : `${s}->${e}`;
const summaryRanges = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  let p = 0;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) continue;
    res.push(print(arr[p], arr[i]));
    p = i + 1;
  }
  res.push(print(arr[p], arr[len - 1]));
  return res;
};

// 11/30/2016
const pr = (v1, v2) => v1 === v2 ? `${v1}` : `${v1}->${v2}`;

const summaryRanges = arr => {
  const res = [];
  const l = arr.length;
  if (!l) return res;
  let next = arr[0];
  for (let i = 1; i < l; i++) {
    if (arr[i - 1] + 1 === arr[i]) continue;
    res.push(pr(next, arr[i - 1]));
    next = arr[i];
  }
  if (next <= arr[l - 1]) res.push(pr(next, arr[l - 1]));
  return res;
};