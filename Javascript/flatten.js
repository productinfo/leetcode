// flatten nest array
var flatten = (function () {

	var result = [];

	return function flat (arr) {

		var len = arr.length, i = 0;

		for (; i < len ; i++) {

			if (Array.isArray(arr[i])) {
				flat(arr[i]);
			} else {
				result.push(arr[i]);
			}

		}

		return result;

	};

})();

// TEST CASE
// [1, 2, [3, [4, 5, [6], 7], 8], 9]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

var f = function (arr) {

	var result = [];

	var index = 0;

	while (index < arr.length) {
		if (Array.isArray(arr[index])) {
			arr = arr.shift().concat(arr);
		} else {
		  result.push(arr.shift());
		}

	}

	return result;

};

// 2/29/2016

var foo = function (a) {
  var r = [];
	while(a.length > 0) {
		var t = a.shift();
		if (Array.isArray(t)) {
			a = t.concat(a);
		} else {
			r.push(t);
		}
	}
	
	return r;
};

console.log(foo([1, 2, [3, [4, 5, [6], 7], 8], 9]));
