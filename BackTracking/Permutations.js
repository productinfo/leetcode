/**
 * @param {number[]} num
 * @return {number[][]}
 */
var permute = function(num) {

  var res = [], sub = [], used = [];

  var l = num.length;

  if (l === 0) {
    return res;
  }

  var dfs = function () {

    if (sub.length === l) {

      var copy = [].concat(sub);
      res.push(copy);
      return;

    }

    for (var i = 0 ; i < l ; i++) {

      // if never used
      if (!used[i]) {

        // add it
        sub.push(num[i]);

        // mark as used
        used[i] = true;

        // recursive
        dfs();

        sub.pop();

        used[i] = false;


      }

    }

  };

  dfs();

  return res;

};

// 8/20/2016
/**
[1, 2, 3]
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 * @param {number[]} nums
 * @return {number[][]}
 */
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const permute = function(nums) {
  const result = [];
  const dfs = (l, r) => {
    if (l === r) {
      result.push(nums.slice());
      return;
    }
    for (let i = l; i <= r; i++) {
      swap(nums, l, i);
      dfs(l + 1, r);
      swap(nums, l, i);
    }
  };
  dfs(0, nums.length - 1);
  return result;
};
