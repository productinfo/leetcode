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