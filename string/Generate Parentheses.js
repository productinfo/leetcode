/**
 * @param {number} n
 * @return {string[]}
 */

// var map = {};

var generateParenthesis = function(n) {

  var res = [];
  var map = {};

  if (n === 0) {
    return res;
  }

  if (n === 1) {
    res.push('()');
    return res;
  }

  var list = generateParenthesis(n - 1);

  for (var i = 0 ; i < list.length ; i++) {

    for (var j = 0 ; j < list[i].length ; j++) {

      if (j === 0) {
        map[list[i] + '()'] = true;
      } else {
        map[list[i].substring(0, j) + '()' + list[i].substring(j)] = true;
      }

    }

  }

  return Object.keys(map);

};

// DFS:
// 1. if there is left, go left
// 2. if right is larger than left, go right


function foo(n) {

	var r = [];

	var dfs = function (left, right, tmp) {
		if (left === 0 && right === 0) {
			r.push(tmp);
			return;
		}

		if(left > 0) {
			dfs(left - 1, right, tmp + '(');
		}

		if (left < right) {
			dfs(left, right - 1, tmp + ')');
		}
	};

	dfs(n, n, '')
	return r;

}

console.log(foo(3));

// O(2 ^ n)
// 9/15/2016
var generateParenthesis = function(n) {
  const res = [];
  const dfs = (l, r, tmp) => {
    if (l === 0 && r === 0) {
      res.push(tmp);
      return;
    }
    if (l > 0) {
      dfs(l - 1, r, tmp + '(');
    }

    if (r > l) {
      dfs(l, r - 1, tmp + ')');
    }
  }
  dfs(n, n, '');
  return res;
};

// 8/29/2017
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  const go = (l, r, exp) => {
    if (l === 0 && r === 0) {
      res.push(exp);
      return;
    }
    if (l > 0) go(l - 1, r, `${exp}(`);
    if (r > l) go(l, r - 1, `${exp})`);
  };
  go(n, n, '');
  return res;
};