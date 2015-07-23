// O(n)

var printKDistant = function (root, k) {

  var res = [];

  if (!root) {
    return res;
  }

  var dfs = function (r, t) {

    if (!r) {
      return;
    }

    if (t === 0) {
      res.push(r.val);
      return;
    }

    dfs(r.left, t - 1);
    dfs(r.right, t - 1);

  };

  dfs(root, k);

  return res;

};