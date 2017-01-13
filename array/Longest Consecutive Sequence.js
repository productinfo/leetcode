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

// 11/29/2016
const longestConsecutive = arr => {
  const map = {};
  arr.forEach(v => map[v] = true);
  const go = (val, inc) => {
    let c = 0;
    while (map[val]) {
      c++;
      delete map[val];
      if (inc) {
        val++;
      } else {
        val--;
      }
    }
    return c;
  };
  let max = 0;
  arr.forEach(v => max = Math.max(max, go(v, false) + go(v + 1, true)));
  return max;
};