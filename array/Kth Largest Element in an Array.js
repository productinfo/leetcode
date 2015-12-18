/////////////////////////
// O(n)
/////////////////////////
var swap = function (arr, a, b) {
  var t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
};

var partion = function (nums, start, end) {

  var pivot = start, tmp;

  while (start <= end) {

    while (start <= end && nums[start] <= nums[pivot]) {
      start++;
    }

    while (start <= end && nums[pivot] < nums[end]) {
      end--;
    }

    if (start > end) {
      break;
    }

    swap(nums, start, end);

  }

  swap(nums, pivot, end);

  return end;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  var start = 0,
      len = nums.length,
      end = len - 1,
      index = len - k,
      pivot;

  while (start < end) {

    pivot = partion(nums, start, end);

    if (pivot < index) {
      start = pivot + 1;
    } else if (pivot > index) {
      end = pivot - 1;
    } else {
      return nums[pivot];
    }

  }

  return nums[start];

};


/////////////////////////
// O(nlogn)
/////////////////////////

var isArray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function MaxHeap(list) {
  this.data = [];
  if (isArray) list.forEach(this.add, this);
}

var swap = function (arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

var shiftUp = function (arr) {

  var current = arr.length - 1, parent;

  while (current > 0) {

    parent = (current - 1) >> 1;

    if (arr[parent] < arr[current]) {
      swap(arr, parent, current);
      current = parent
    } else break;

  }

};

var shiftDown = function (arr) {

  var k = 0, l = 2 * k + 1,
      len = arr.length, r, max;

  while (l < len) {

    max = l;

    r = l + 1;

    if (r < len && arr[r] > arr[l]) {
      // there is right child and right child is greater than left child
      max++;
    }

    if (arr[max] > arr[k]) {
      swap(arr, max, k);
      k = max;
      l = 2 * k + 1;
    } else break;

  }

};

MaxHeap.prototype.add = function (value) {
  this.data.push(value);
  shiftUp(this.data);
}

MaxHeap.prototype.size = function () {
  return this.data.length;
}

MaxHeap.prototype.toString = function () {
  return this.data.toString();
}

MaxHeap.prototype.pop = function () {

  var data = this.data,
      len = data.length, v;

  if (len === 0) return null;

  if (len === 1) return data.pop();

  v = data[0];

  data[0] = data[len - 1];

  data.pop();

  shiftDown(this.data);

  return v;
}


var findKthLargest = function(nums, k) {

    if (!nums) return 0;

    var len = nums.length;

    if (len === 0) return 0;

    var heap = new MaxHeap(nums), res;

    while (k--) {
        res = heap.pop();
    }

    return res;

};
