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