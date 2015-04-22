/**
 * @param {number[]} nums
 * @return {number}
 */

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