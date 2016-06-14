var map = {
  0: 1,
	1: 0,
	2: 0,
	3: 0,
	4: 1,
	5: 0,
	6: 1,
	7: 0,
	8: 2,
	9: 1
};

/*
 * Complete the function below.
 */
function solvePuzzle(num) {
	if (typeof num !== 'number') {
		return 0;
	}
  var s = '' + num;
	var len = s.length;
	var total = 0;
  while (len--) {
		total += map[+s[len]];
	}

	return total;
}
