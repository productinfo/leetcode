var _isArray = Array.isArray || function (arr) {
	return Object.prototype.toString.call(arr) === '[object Array]';
};

var deepCopy = function (obj) {

	var isA = _isArray(obj);
	var result = isA ? [] : {};

	if (!obj) return result;

	if (isA) {

		var len = obj.length, i = 0;

		for (; i < len ; i++) {
			result.push(obj[i]);
		}

	} else {

		for (var item in obj) {

			if (typeof obj[item] === 'object') {
				result[item] = deepCopy(obj[item]);
			} else {
				result[item] = obj[item];
			}

		}

	}

	return result;

};
