// 9/10/2016
var majorityElement = function(nums) {
  const len = nums.length;
  let mj = nums[0];
  let c = 1;
  for (let i = 1; i < len; i++) {
    if (c === 0) {
      mj = nums[i];
      c++;
    } else if (nums[i] === mj) {
      c++;
    } else {
      c--;
    }
  }
  return mj;
};

// 4/6/2016
const majorityElement = (arr) => {

	let len = arr.length;

	if (!len) return -1;

	let c = 1, index = 0;

	while (len--) {
		if (arr[index] === arr[len]) {
			c++;
		} else {
			c--;
		}

		if (c === 0) {
			c++;
			index = len;
		}
	}

	return arr[index];

};



/**
 * @param {number[]} nums
 * @return {number}
 */

// sort array, since majority element must over half size of array
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  nums = nums.sort();

  return nums[nums.length >> 1];

};



// n / 2

var findCand = function (n) {

  var i = 1;
  var index = 0;
  var cand = n[0];
  var count = 1;
  var ln = n.length;
  var pv;

  for (; i < ln ; i++) {

    pv = n[i - 1]

    if (pv === cand) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      cand = n[i];
      count = 1;
      index = i;
    }

  }

  return index;
};

var isMj = function (n, index) {

  var l = n.length;
  var i = 0;
  var c = 0;
  for (; i < l ; i++) {

    if (n[i] === n[index]) {
      c++;
    }

  }

  return c > n / 2;

};

var majorityElement = function(nums) {

  var l = nums.length;

  if (l === 0) {
    return 0;
  }

  var x = findCand(nums);
  return isMj(nums, x) ? nums[x] : 0;
};

// var majorityElement = function(nums) {

//   var l = nums.length, map = {}, i = 0;

//   for (; i < l ; i++) {
//     if (map.hasOwnProperty(nums[i])) {
//       map[nums[i]][1] += 1;
//     } else {
//       map[nums[i]] = [i, 1];
//     }
//   }

//   var max = 1, index = 0;

//   for (var x in map) {

//     if (map[x][1] > max) {
//       index = map[x][0];
//       max = map[x][1];
//     }

//   }

//   return max > l / 2 ? max : 0;

// };

// 11/16/2016
const majorityElement = arr => {
  let c = 0;
  let n = 0;
  for (let l = arr.length, i = 0; i < l; i++) {
    if (c === 0) {
      n = arr[i];
      c++;
    } else if (arr[i] === n) {
      c++;
    } else {
      c--;
    }
  }
  return n;
};