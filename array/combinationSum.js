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

  var go = function (cand, start, target) {
    if (target === 0) {
      result.push([].concat(sub));
      return;
    }

    if (target < cand[i]) {
        return;
      }

    for (var i = start ; i < cand.length ; i++) {

      sub.push(cand[i]);

      go(cand, i, target - cand[i]);

      sub.pop();

    }
  };

  go(candidates, 0, target);
  return result;

};