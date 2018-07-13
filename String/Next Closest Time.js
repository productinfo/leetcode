const nextClosestTime = time => {
  const tmp = [];

  let str = '';
  for (const t of time) {
    if (t !== ':') str += t;
  }

  const len = str.length;

  const toTime = s => +s.slice(0, 2) * 60 + +s.slice(2, 4);

  const T1 = toTime(str);

  const conv = str => {
    let t = 0;
    for (const ch of str) {
      t = t * 10 + (+ch);
    }
    return t;
  };

  const diff = (t1, t2) => {
    if (t1 === t2) return Infinity;
    return (t2 - t1 + 24 * 60) % (24 * 60);
  };

  let min = Infinity;
  let res = str;

  const dfs = j => {
    if (tmp.length === 4) {
      const st = tmp.join('');
      const T2 = toTime(st);
      const d = diff(T1, T2);
      if (d < min) {
        min = d;
        res = st;
      }
      return;
    }
    for (let i = 0; i < len; i++) {
      if (tmp.length > 0 && conv(tmp[0]) > 2) return
      if (tmp.length > 1 && conv(tmp.slice(0, 2).join('')) > 23) return
      if (tmp.length > 2 && conv(tmp[2]) > 5) return
      tmp.push(str[i]);
      dfs(i);
      tmp.pop();
    }
  };
  dfs(0);
  return `${res.slice(0, 2)}:${res.slice(2, 4)}`;
};

const nextClosestTime = time => {
  let str = '';
  
  const toTime = s => +s.slice(0, 2) * 60 + +s.slice(2, 4);

  const T1 = toTime(`${time.slice(0, 2)}${time.slice(3, 5)}`);

  const conv = str => {
    let t = 0;
    for (const ch of str) {
      t = t * 10 + (+ch);
    }
    return t;
  };

  const diff = (t1, t2) => {
    if (t1 === t2) return Infinity;
    return (t2 - t1 + 24 * 60) % (24 * 60);
  };

  let min = Infinity;
  let res = time;
  const dfs = j => {
    if (str.length === 4) {
      const T2 = toTime(str);
      const d = diff(T1, T2);
      if (d < min) {
        min = d;
        res = `${str.slice(0, 2)}:${str.slice(2, 4)}`;
      }
      return;
    }
    for (let i = 0; i < time.length; i++) {
      if (time[i] !== ':') {
        if (str.length > 0 && +str[0] > 2) return
        if (str.length > 1 && conv(str.slice(0, 2)) > 23) return
        if (str.length > 2 && +str[2] > 5) return
        str += time[i];
        dfs(i);
        str = str.slice(0, str.length - 1);
      }
    }
  };
  dfs(0);
  return res;
};

// 4/26/2018
const get = str => (+str.slice(0, 2)) * 60 + (+str.slice(2))
const nextClosestTime = str => {
  let res = str;
  if (!str) return res;
  const [h, m] = str.split(':');
  let diff = Infinity;
  const char = [...h.split(''), ...m.split('')];
  let tmp = '';
  const base = get(`${h}${m}`);
  const d = (t1, t2) => {
    if (t1 === t2) return Infinity;
    if (t1 < t2) return t1 + (1440 - t2);
    return t1 - t2;
  };
  const dfs = () => {
    if (tmp.length === 4) {
      // console.log(tmp)
      const delta = d(get(tmp), base);
      if (delta < diff) {
        diff = delta;
        res = `${tmp.slice(0, 2)}:${tmp.slice(2)}`;
      }
      return;
    }
    for (let i = 0; i < char.length; i++) {
      if (tmp.length > 0 && +tmp[0] > 2) continue;
      if (tmp.length > 1 && +tmp.slice(0, 2) > 23) continue;
      if (tmp.length > 2 && +tmp[2] > 5) continue;
      tmp += char[i]
      dfs();
      tmp = tmp.slice(0, tmp.length - 1);
    }
  };
  dfs();
  return res;
};
