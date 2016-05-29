var fib = (function () {

  var cached = [];

  return function rec (n) {

    if (cached[n]) {
      return cached[n];
    }

    if (n < 2) {
      return 1;
    }

    cached[n] = rec(n - 1) + rec(n - 2);

    return cached[n];

  };

})();

// 4/24/2016
/*

0, 1
1, 1
2, 2
3, 3
4, 5
5, 8

*/

const x = (n) => {
	let d1 = 1, d2 = 1, d3;
	if (n < 2) return d1;
	while (n-- >= 2) {
		d3 = d1 + d2;
		d1 = d2;
		d2 = d3;
	}
	return d3;
};

console.log(x(0));
console.log(x(1));
console.log(x(2));
console.log(x(3));
console.log(x(4));
console.log(x(5));
console.log(x(6));
