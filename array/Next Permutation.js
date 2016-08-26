/**
 * @param {number[]} num
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(num) {

  var l = num.length;

  if (l === 0) {
    return;
  }

  var k = -1;
  var i;

  for (i = 0 ; i < l - 1 ; i++) {

    if (num[i] < num[i + 1]) {
      k = Math.max(k, i);
    }

  }

  if (k === -1) {
    rev(num, 0, l - 1);
  } else {

    var p = 0;

    for (i = k ; i < l ; i++) {

      if (num[i] > num[k]) {
        p = Math.max(p, i);
      }

    }

    swap(num, k, p);
    rev(num, k + 1, l - 1);

  }

};

var swap = function (n, a, b) {
  var t = n[a];
  n[a] = n[b];
  n[b] = t;
};

var rev = function (n, s, e) {

  var mid = (s + e) >> 1;

  for (var i = s ; i <= mid ; i++) {
    swap(n, i, s + e - i);
  }
};

// 3/21/2016
var rev = function (arr, i, j) {
	var t;
	console.log(i, j);
	while(i < j) {
		t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
		i++;
		j--;
	}
};

var swap = function(arr, i, j) {
	var t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
};

var nextPermutation = function(nums) {

  var k = -1, i, len = nums.length, p = 0;

  for (i = 0; i < len - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      k = Math.max(k, i);
    }
  }

	if (k === -1) {
		rev(nums, 0, len - 1);
	} else {
		for (i = k; i < len; i++) {
			if (nums[k] < nums[i]) {
				p = Math.max(p, i);
			}
		}

		// swap
		swap(nums, k, p);

		// reverse
		rev(nums, k + 1, len - 1);
	}

};
