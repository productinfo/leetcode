/**
 * @param {number[]} num
 * @return {number[][]}
 */
var permuteUnique = function(num) {

  var res = [], sub = [], used = [];

  var l = num.length;

  if (l === 0) {
    return res;
  }

  num.sort(function (a, b) {
    return a - b;
  });

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

        while (i < l - 1 && num[i] === num[i + 1]) {
          i++
        }

      }

    }

  };

  dfs();

  return res;

};

// 10/24/2016
const permuteUnique = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const sub = [];
  const used = [];
  arr = arr.sort((a, b) => a - b);
  const dfs = () => {
    if (sub.length === len) {
      res.push(sub.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      if (i > 0 && arr[i] === arr[i - 1] && used[i - 1]) continue;
      used[i] = true;
      sub.push(arr[i]);
      dfs();
      used[i] = false;
      sub.pop();
    }
  };
  dfs();
  return res;
};