/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  var len = candidates.length,
      result = [],
      sub = [];

  if (len === 0) {
    return result;
  }

  candidates.sort(function (a, b) {
    return a - b;
  });

  var dfs = function (start, target) {

    if (target === 0) {
      result.push([].concat(sub));
      return;
    }

    for (var i = start ; i < candidates.length ; i++) {

      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (target < candidates[i]) {
        return;
      }

      sub.push(candidates[i]);

      dfs(i + 1, target - candidates[i]);

      sub.pop();

    }

  };

  dfs(0, target);

  return result;
};

// 9/7/2016
var combinationSum2 = function(candidates, target) {

  const res = [];
  const sub = [];
  const len = candidates.length;
  if (!len) return res;

  candidates = candidates.sort((a, b) => a - b);

  const dfs = (index, rem) => {
    if (rem === 0) {
      res.push(sub.slice());
      return;
    }
    if (rem < 0) return;
    for (let i = index; i < len; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      sub.push(candidates[i]);
      dfs(i + 1, rem - candidates[i]);
      sub.pop();
    }
  };
  dfs(0, target);
  return res;
};

console.log(fb([10, 1, 2, 7, 6, 1, 5], 8));

// 11/5/2016
// O(k * 2^n') time
const combinationSum2 = (arr, target) => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const sub = [];
  arr = arr.sort((a, b) => a - b);
  const dfs = (s, rem) => {
    if (rem < 0) return;
    if (rem === 0) {
      res.push(sub.slice());
      return;
    }
    for (let i = s; i < len; i++) {
      if (i > s && arr[i] === arr[i - 1]) continue;
      sub.push(arr[i]);
      dfs(i + 1, rem - arr[i]);
      sub.pop();
    }
  };
  dfs(0, target);
  return res;
};

// 6/3/2017
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const len = candidates.length;
    const res = [];
    if (!len) return res;
    const sub = [];
    candidates = candidates.sort((a, b) => a - b);
    const dfs = (pos, rem) => {
        if (rem === 0) {
            res.push(sub.slice());
            return;
        }
        for (let j = pos; j < len; j++) {
            if (j > pos && candidates[j] === candidates[j - 1]) continue;
            if (rem < candidates[j]) return;
            sub.push(candidates[j]);
            dfs(j + 1, rem - candidates[j]);
            sub.pop();
        }
    };
    dfs(0, target);
    return res;
};