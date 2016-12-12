var ts = function (numbers, target) {

  var map = {};

  var l = numbers.length;

  if (l === 0) {
    return [0, 0];
    }


  var front = 0, total, back = l - 1;

  while (front < back) {

    var total = numbers[front] + numbers[back];

    if (total === target) {
      return [front + 1, back + 1];
    } else if (total < target) {
      front++;
    } else {
      back--;
    }

  }

  return [-1, -1];


};

// 9/14/2016
var twoSum = function(nums, target) {
  const len = nums.length;
  if (!len) return [-1, -1];
  let l = 0;
  let h = len - 1;
  while (l < h) {
    let sum = nums[l] + nums[h];
    if (sum === target) {
      return [l + 1, h + 1];
    } else if (sum < target) {
      l++;
    } else {
      h--;
    }
  }
  return [-1, -1];
};
