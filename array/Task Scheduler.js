/**
 * ans = (k - 1) * (m + 1) + p
 * 
 * k - 1
 * A B _ A B _ A B (`+p`)
 * (n + 1)
 */
var leastInterval = function(tasks, n) {
  if (!tasks.length) return 0;
  const count = [];
  const BASE = '65';
  for (const ch of tasks) {
    const k = ch.charCodeAt(0) - BASE;
    count[k] = count[k] || 0;
    count[k]++;
  }
  const max = Math.max(...count);
  const index = count.findIndex(v => v === max);
  const frq = count.filter(v => v === max).length;
  const ans = (count[index] - 1) * (n + 1) + frq;
  return Math.max(ans, tasks.length);
};

/**
 * ans = (k - 1) * (m + 1) + p
 * 
 * k - 1
 * A B _ A B _ A B (`+p`)
 * (n + 1)
 */
var leastInterval = function(tasks, n) {
  if (!tasks.length) return 0;
  const count = [];
  const BASE = '65';
  for (const ch of tasks) {
    const k = ch.charCodeAt(0) - BASE;
    count[k] = count[k] || 0;
    count[k]++;
  }
  const max = Math.max(...count);
  const frq = count.filter(v => v === max).length;
  const ans = (max - 1) * (n + 1) + frq;
  return Math.max(ans, tasks.length);
};

var leastInterval = function(tasks, n) {
  const map = {};
  for (const ch of tasks) {
    map[ch] = map[ch] || 0;
    map[ch]++;
  }
  const sort = (a, b) => map[b] === map[a] ? a.localeCompare(b) : map[b] - map[a];
  const heap = Object.keys(map).sort(sort);
  let count = 0;
  while (heap.length) {
    let k = n + 1;
    const tmp = [];
    while (k > 0 && heap.length) {
      const top = heap.shift();
      map[top]--;
      tmp.push(top);
      k--;
      count++;
    }

    for (const e of tmp) {
      if (map[e] > 0) {
        heap.push(e);
        heap.sort(sort);
      }
    }

    if (!heap.length) break;
    count += k;
  }
  return count;
};
