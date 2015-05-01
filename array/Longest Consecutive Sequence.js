/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  var l = nums.length;

  if (l === 0) {
    return 0;
  }

  var map = {};
  var i;

  for (i = 0 ; i < l ; i++) {
    map[nums[i]] = true;
  }

  var get = function (n, inc) {
    
    var c = 0;

    while (map.hasOwnProperty(n)) {

      c++;

      delete map[n];

      if (inc) {
        n++;
      } else {
        n--;
      }

    }

    return c;

  }

  max = 0;

  var tmp;

  for (i in map) {
    tmp = parseInt(i, 10);  
    max = Math.max(max, get(tmp, false) + get(tmp + 1, true));

  }
  
  return max;

};