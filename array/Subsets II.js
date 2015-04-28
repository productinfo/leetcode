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