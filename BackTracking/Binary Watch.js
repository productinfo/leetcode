/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  if (num === 0) return ['0:00'];
  const res = [];
  const b = [1, 2, 4, 8, -1, -2, -4, -8, -16, -32];
  let t = [];
  const dfs = j => {
    if (t.length === num) {
      let h = 0;
      let m = 0;
      for (const v of t) {
        if (v > 0) h += v;
        else m += v;
      }
      m *= -1;
      if (h < 12 && m < 60) {
        res.push(`${h}:${m < 10 ? '0' : ''}${m}`);
      }
      return;
    }
    for (let i = j; i < b.length; i++) {
      t.push(b[i]);
      dfs(i + 1);
      t.pop();
    }
  };
  dfs(0);
  return res;
};

console.log(readBinaryWatch(4))
