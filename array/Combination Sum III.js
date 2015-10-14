/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var sum = function (A) {
	return A.reduce(function (prev, curr) {
		return prev + curr;
	});
};

var combinationSum3 = function(k, n) {

  var sub = [], res = [];

	var dfs = function (s) {

		if (sub.length === k && sum(sub) === n) {
			res.push([].concat(sub));
			return;
		}

    if (k - sub.length === 1 && s !== n - sum(sub)) {
      return;
    }

		for (var i = s ; i <= 9 ; i++) {

			sub.push(i);
			dfs(i + 1);
			sub.pop();

		}

	};

	dfs(1);

	return res;
};
