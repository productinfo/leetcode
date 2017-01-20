/**
 * 2/25/2016
 */
var threeSum = function(nums) {

  const len = nums.length;
  let result = [];

  if (len === 0 || len < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  let j, k, offset;

  for (let i = 0; i < len - 2; i++) {

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    j = i + 1;
    k = len - 1;
    offset = -nums[i];

    while (j < k) {
      if (nums[j] + nums[k] === offset) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (nums[j] + nums[k] < offset) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};

// 9/23/2016
const threeSum = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let b = i + 1;
    let c = len - 1;
    while (b < c) {
      const sum = arr[i] + arr[b] + arr[c];
      if (sum === 0) {
        res.push([arr[i], arr[b], arr[c]]);
        while (b < c && arr[b] === arr[b + 1]) b++;
        while (b < c && arr[b] === arr[c - 1]) c--;
        b++;
        c--;
      } else if (sum < 0) {
        b++;
      } else {
        c--;
      }
    }
  }
  return res;
};

// 10/20/2016
const threeSum = arr => {
  const res = [];
  if (!Array.isArray(arr)) return res;
  const len = arr.length;
  if (!len) return res;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        res.push([arr[i], arr[j], arr[k]]);
        while (j < k && arr[j] === arr[j + 1]) j++;
        while (j < k && arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
