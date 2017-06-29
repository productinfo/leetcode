/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

  var res = [];

  if (!nums) return res;

  var len = nums.length;

  if (len === 0) return res;

  var n1, n2, c1 = 0, c2 = 0, i = 0;

  for (; i < len ; i++) {

    if (n1 && nums[i] === n1) {
      c1++;
    } else if (n2 && nums[i] === n2) {
      c2++;
    } else if (c1 === 0) {
      n1 = nums[i];
      c1 = 1;
    } else if (c2 === 0) {
      n2 = nums[i];
      c2 = 1;
    } else {
      c1--;
      c2--;
    }

  }

  c1 = c2 = 0;

  for (i = 0 ; i < len ; i++) {
    if (nums[i] === n1) c1++;
    else if (nums[i] === n2) c2++;
  }

  if (c1 > (len / 3)) res.push(n1);
  if (c2 > (len / 3)) res.push(n2);

  return res;

};

// 6/4/2017
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const len = nums.length;
  let n1;
  let n2;
  let c1 = 0;
  let c2 = 0;
  for (const v of nums) {
    if (n1 && n1 === v) {
      c1++;
    } else if (n2 && n2 === v) {
      c2++;
    } else if (c1 === 0) {
      c1++;
      n1 = v;
    } else if (c2 === 0) {
      c2++;
      n2 = v;
    } else {
      c1--;
      c2--;
    }
  }
  c1 = 0;
  c2 = 0;
  for (const v of nums) {
    if (v === n1) c1++;
    else if (v === n2) c2++;
  }
  const res = [];
  if (c1 > (len / 3)) res.push(n1);
  if (c2 > (len / 3)) res.push(n2);
  return res;
};