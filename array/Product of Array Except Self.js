/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  if (!nums) return [];

  var len = nums.length;

  if (len === 0) return [];

  var i, a = [1], index = 1;

  for (i = 1 ; i < len ; i++) {

    index *= nums[i - 1];

    a[i] = index;

  }

  index = 1;

  for (i = len - 2 ; i >= 0 ; i--) {

    index *= nums[i + 1];

    a[i] *= index;

  }

  return a;

};

// 4/16/2016
const productExceptSelf = (nums) => {

  const len = nums.length;
	const t = [1];

	for (let i = 1; i < len; i++) {

		t[i] = t[i - 1] * nums[i - 1];

	}

	let p = 1;

	for (let i = len - 2; i >= 0; i--) {
		p = p * nums[i + 1];
		t[i] *= p;
	}

	return t;

};
