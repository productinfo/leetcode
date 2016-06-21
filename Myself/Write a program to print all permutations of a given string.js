var swap = function (s, a, b) {
	var g = s.split('');
	var t = g[a];
	g[a] = g[b];
	g[b] = t;
	return g.join('');
};

var foo = function (str) {
	var result = [];
	var p = function (l, r) {
		if (l === r) {
			result.push(str);
			return;
		}

		for(var i = l; i <= r; i++) {
      str = swap(str, l, i);
			p(l + 1, r);
			str = swap(str, l, i);
		}
	};

	p(0, str.length - 1);

	return result;
};

console.log(foo('ABC'));
