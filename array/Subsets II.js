/**
 * @param {number[]} S
 * @return {number[][]}
 */
var subsetsWithDup = function(S) {

  var result = [];

  if (S.length === 0) {
    return result;
  }

  var i = 0, sub = [];

  S.sort(function (a, b) {
    return a - b;
  });

  var rec = function (start) {

    result.push([].concat(sub));

    for (var i = start ; i < S.length ; i++) {

      if (i > start && S[i] === S[i - 1]) {
        continue;
      }

      sub.push(S[i]);

      rec(i + 1);

      sub.pop();

    }
  };

  rec(0);

  return result;

};

// 9/12/2016
var subsetsWithDup = function(nums) {
  const res = [];
  const len = nums.length;
  if (!len) return res;
  const sub = [];
  nums = nums.sort((a, b) => a - b);
  const dfs = (index) => {
    res.push(sub.slice());
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      sub.push(nums[i]);
      dfs(i + 1);
      sub.pop();
    }
  };
  dfs(0);
  return res;
};

var subsetsWithDup = function(nums) {
  const res = [[]];
  const len = nums.length;
  if (!len) return res;
  nums = nums.sort((a, b) => a - b);
  let size = 0;
  for (let i = 0; i < len; i++) {
    let start = (i > 0 && nums[i] === nums[i - 1]) ? size : 0;
    size = res.length;
    for (let j = start; j < size; j++) {
      const cur = res[j].slice();
      cur.push(nums[i]);
      res.push(cur);
    }
  }
  return res;
};

// 10/7/2016
const subsetsWithDup = nums => {
  const res = [[]];
  const len = nums.length;
  if (!len) return res;
  nums = nums.sort((a, b) => a - b);
  let size = 0;
  for (let i = 0; i < len; i++) {
    let start = (i > 0 && nums[i] === nums[i - 1]) ? size : 0;
    size = res.length;
    for (; start < size; start++) {
      const tmp = res[start].slice();
      tmp.push(nums[i]);
      res.push(tmp);
    }
  }
  return res;
};
