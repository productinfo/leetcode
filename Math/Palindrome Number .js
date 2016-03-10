/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  var l = 1;

  while (x / l >= 10) {
    l *= 10;
  }

  while (x !== 0) {

    var right = x % 10;
    var left = (x / l) >> 0;

    if (left !== right) {
      return false;
    }

    x %= l;
    x = (x / 10) >> 0;

    l = (l / 100) >> 0;

  }

  return true;

};

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  var s = x + '';

  var start = 0, last = s.length - 1;

  while (start < last) {

    if (s[start] !== s[last]) {
      return false;
    }

    start++;
    last--;

  }

  return true;

};

/**
 * 2/23/2016...
 */
var isPalindrome = function(x) {
    var r = 0, d = x;
    var MAX = Math.pow(2, 31) - 1;
    var MIN = -Math.pow(2, 31);

    if (x > MAX || x < MIN || x < 0) {
        return false;
    }

	while (d) {

		r = (r * 10) + (d % 10);
		d = (d / 10) >> 0;
	}

	return x === r;
};
