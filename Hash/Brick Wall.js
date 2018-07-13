// find the most cut and do `length of wall - most cut` it is the anwser
// time: O(n ^ 2)
// space: O(n)
const leastBricks = wall => {
  const yl = wall.length;
  if (!yl) return 0;
  const xl = wall[0].length;
  let count = 0;
  const map = {};
  for (const list of wall) {
    let len = 0;
    for (let i = 0; i < list.length - 1; i++) {
      len += list[i];
      map[len] = (map[len] || 0) + 1;
      count = Math.max(count, map[len]);
    }
  }
  return yl - count;
};

// 5/31/2017
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const map = {};
  const total = wall.length;
  let max = 0;
  for (const list of wall) {
    let cur = 0;
    for (let j = 0; j < list.length - 1; j++) {
      cur += list[j];
      map[cur] = map[cur] || 0;
      map[cur]++;
      max = Math.max(max, map[cur]);
    }
  }
  return total - max;
};