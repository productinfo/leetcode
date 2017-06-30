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

// 3/27/2017
// [100, 4, 200, 1, 3, 2]
// 1 , 2, 3, 4
// 4
const longestConsecutive = arr => {
  const map = {};
  arr.forEach(a => map[a] = true);
  const find = (v, inc) => {
    let t = 0;
    while (v in map) {
      delete map[v];
      t += 1;
      if (inc) {
        v += 1;
      } else {
        v -= 1;
      }
    }
    return t;
  };
  let max = 0;
  arr.forEach(a => max = Math.max(
    max,
    find(a, false) + find(a + 1, true)
  ));
  return max;
};

// 4/13/2017
// [100, 4, 200, 1, 3, 2],
const longestConsecutive = arr => {
  const map = {};
  let max = 0;
  for (const a of arr) {
    map[a] = true;
  }
  const go = (n, inc) => {
    let t = 0;
    while (n in map) {
      delete map[n];
      t += 1;
      if (inc) n += 1;
      else n -= 1;
    }
    return t;
  };
  for (const a of arr) {
    const total = go(a, false) + go(a + 1, true);
    max = Math.max(max, total);
  }
  return max;
};