var crackSafe = function(n, k) {
  const total = Math.pow(k, n);
  const tmp = [];
  let res = Array(n).fill(0).join('');
  const map = {
    [res]: 0
  };
  const dfs = () => {
    if (Object.keys(map).length === total) {
      return true;
    }
    let prev = res.substring(res.length - n + 1, res.length);
    for (let i = 0; i < k; i++) {
      let next = prev + i;
      if (!(next in map)) {
        map[next] = 0;
        res += i;
        if (dfs()) return true;
        delete map[next];
        res = res.slice(0, res.length - 1);
      }
    }
    return false;
  };
  dfs();
  return res;
};

// 
var crackSafe = function(n, k) {
  const total = Math.pow(k, n);
  let res = Array(n).fill(0).join('');
  const map = {
    [res]: 0
  };
  let ans = '';
  let found = false;
  const dfs = _ => {
    if (found) return;
    if (Object.keys(map).length === total) {
      ans = res;
      found = true;
      return;
    }
    let pv = res.substring(res.length - n + 1, res.length);
    for (let i = 0; i < k; i++) {
      const next = pv + i;
      if (next in map) continue;
      map[next] = 0;
      res += i;
      dfs();
      delete map[next];
      res = res.slice(0, res.length - 1);
    }
  };
  dfs();
  return ans;
};

// 4/26/2018
var crackSafe = function(n, k) {
  const total = Math.pow(k, n);
  let tmp = Array(n).fill(0).join('');
  const map = {
    [tmp]: 0
  };
  let ans = '';
  let found = false;
  const dfs = () => {
    if (found) return;
    if (Object.keys(map).length === total) {
      ans = tmp;
      found = true;
      return;
    }
    for (let i = 0; i < k; i++) {
      const subs = `${tmp.slice(tmp.length - n + 1)}${i}`;
      if (!(subs in map)) {
        map[subs] = 0;
        tmp += `${i}`;
        dfs();
        tmp = tmp.slice(0, tmp.length - 1);
        delete map[subs];
      }
    }
  };
  dfs();
  return ans;
};
