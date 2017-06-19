/**
 * @param {number[]} S
 * @return {number[][]}
 */
var subsets = function(S) {

  var result = [[]];

  if (S.length === 0) {
    return result;
  }

  var i = 0, size, j, sub;

  S.sort(function (a, b) {
    return a - b;
  });

  for (; i < S.length ; i++) {

    size = result.length;

    for (j = 0 ; j < size ; j++) {

      sub = [].concat(result[j]);

      sub.push(S[i]);

      result.push(sub);

    }

  }


  return result;
};

// original it is O(2 ^ n) problem
// now it is O(n ^ 2)

// 9/12/2016
var subsets = function(nums) {
  const res = [[]];
  const len = nums.length;
  if (!len) return res;
  // nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    const size = res.length;
    for (let j = 0; j < size; j++) {
      const cur = res[j].slice();
      cur.push(nums[i]);
      res.push(cur);
    }
  }
  return res;
};

// 3/26/2017
const subsets = (arr) => {
  const res = [[]];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0, size = res.length; j < size; j++) {
      const tmp = res[j].slice();
      tmp.push(arr[i]);
      res.push(tmp);
    }
  }
  return res;
};
