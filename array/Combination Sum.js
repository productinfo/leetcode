/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  var len = candidates.length, result = [], sub = [];

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

      if (target < candidates[i]) {
        return;
      }

      sub.push(candidates[i]);

      dfs(i, target - candidates[i]);

      sub.pop();

    }
  };

  dfs(0, target);
  return result;

};

// 9/7/2016
// O(k * 2^n') time
// k is average length of each solution, and we need O(k) time to copy new linkedlist when we get one combination.
var combinationSum = function(candidates, target) {
  const res = [];
  const sub = [];
  const len = candidates.length;
  if (!len) return res;
  const dfs = (index, rem) => {
    if (rem === 0) {
      res.push(sub.slice());
      return;
    }
    if (rem < 0) return;
    for (let i = index; i < len; i++) {
      sub.push(candidates[i]);
      dfs(i, rem - candidates[i]);
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
var combinationSum = function(candidates, target) {
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
            if (rem < candidates[j]) return;
            sub.push(candidates[j]);
            dfs(j, rem - candidates[j]);
            sub.pop();
        }
    };
    dfs(0, target);
    return res;
};
