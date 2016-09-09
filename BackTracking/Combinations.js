/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  var res = [];

  if (n <= 0 || k > n) {
    return res;
  }

  var sub = [];

  var dfs = function (start) {

    if (sub.length === k) {
      var copy = [].concat(sub);
      res.push(copy);
      return;
    }

    for (var i = start ; i <= n ; i++) {

      sub.push(i);
      dfs(i + 1);
      sub.pop();

    }

  };

  dfs(1);

  return res;

};

// 9/7/2016
var combine = function(n, k) {

  const res = [];
  const sub = [];
  const dfs = start => {
    if (sub.length === n) {
      res.push(sub.slice());
      return;
    }
    for (let i = start; i <= k; i++) {
      sub.push(i);
      dfs(i + 1);
      sub.pop();
    }
  };
  dfs(1);
  return res;
};
