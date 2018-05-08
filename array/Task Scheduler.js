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
