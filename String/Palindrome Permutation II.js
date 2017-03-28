/*
Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

For example:

Given s = "aabb", return ["abba", "baab"].

Given s = "abc", return [].
*/

const permuteUnique = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const sub = [];
  const used = [];
  arr = arr.sort((a, b) => a - b);
  const dfs = () => {
    if (sub.length === len) {
      res.push(sub.join(''));
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      if (i > 0 && arr[i] === arr[i - 1] && used[i - 1]) continue;
      used[i] = true;
      sub.push(arr[i]);
      dfs();
      used[i] = false;
      sub.pop();
    }
  };
  dfs();
  return res;
};

const g = s => {
	const len = s.length;
  const res = [];
  const map = {};
  let odd = 0;
  for (let i = 0; i < len; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
		odd += map[s[i]] % 2 === 0 ? -1 : 1;
  }
  if (odd > 1) return res;
  const cs = [];
  let m;
	for (let k in map) {
    const val = map[k];
    if (val % 2 === 0) {
    	for (let j = 0; j < val / 2; j++) {
      	cs.push(k);
      }
    } else {
      m = k
    }
  }
  const half = permuteUnique(cs);
  half.forEach(
    h => res.push(
      h + (m ? m : '') + h.split('').reverse().join('')
    )
  );
  return res;
};

console.log(g('aabbcadad'));
// console.log(g('aabb'));
// console.log(g('carerac'));
// g('abc');
// g('carerac');

// 11/23/2016
const generate = str => {
  const l = str.length;
  const res = [];
  const sub = [];
  const used = [];
  str = str.sort((a, b) => a - b);
  const dfs = _ => {
    if (sub.length === l) {
      res.push(sub.join(''));
      return;
    }
    for (let i = 0; i < l; i++) {
      if (used[i]) continue;
      if (i > 0 && str[i] === str[i - 1] && used[i - 1]) continue;
      sub.push(str[i]);
      used[i] = true;
      dfs();
      sub.pop();
      used[i] = false; 
    }
  };
  dfs();
  return res;
};

const g = str => {
  const res = [];
  const len = str.length;
  const map = {};
  let odd = 0;
  for (let i = 0; i < len; i++) {
    if (map[str[i]]) {
      map[str[i]]++;
    } else {
      map[str[i]] = 1;
    }
    odd += map[str[i]] % 2 === 0 ? -1 : 1;
  }
  if (odd > 1) return res;
  let mid = '';
  let vals = [];
  Object.keys(map).forEach(k => {
    let num;
    if (map[k] % 2 === 1) {
      mid = k;
      if (map[k] > 1) {
        num = (map[k] - 1) / 2;
      }
    } else {
      num = map[k] / 2;
    }
    vals = vals.concat(Array.from({ length: num }, v => k));
  });
  const list = generate(vals);
  for (let ll = list.length, i = 0; i < ll; i++) {
    res.push(`${list[i]}${mid}${list[i].split('').reverse().join('')}`);
  }
  return res;
};