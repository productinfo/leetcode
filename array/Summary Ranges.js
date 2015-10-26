/**
 * use helper function
 */
 var print = function (start, end) {
   return start === end ? start + '' : start + '->' + end;
 };

 /**
  * @param {number[]} nums
  * @return {string[]}
  */
 var summaryRanges = function(nums) {

   var res = [];

   if (!nums) return res;

   var len = nums.length;

   if (len === 0) return res;

   var i = 0, start = 0;

   for (; i < len - 1 ; i++) {

     while (nums[i] + 1 === nums[i + 1] && i < len) i++;

     res.push(print(nums[start], nums[i]));

     start = i + 1;

   }

   if (start < len) res.push(print(nums[start], nums[i]));

   return res;

 };


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

  var res = [];

  if (!nums) return res;

  var len = nums.length;

  if (len === 0) return res;

  if (len === 1) return [nums[0] + ''];

  var start = 0, i = 0;

  for (; i < len - 1 ; i++) {

    while (nums[i] + 1 === nums[i + 1]) i++;

    res.push(start === i ? (nums[start] + '') : (nums[start] + '->' + nums[i]));

    start = i + 1;

  }

  if (nums[start]) res.push(start === i ? (nums[start] + '') : (nums[start] + '->' + nums[i]));

  return res;

};
