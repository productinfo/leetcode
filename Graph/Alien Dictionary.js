// graph
/**
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
 */
const alienOrder = words => {
  const q = [];
  const graph = {};
  const degree = {};
  let res = '';
  if (!words || words.length === 0) return res;
  
  for (const w of words) {
    for (const c of w) {
      degree[c] = 0;
    }
  }

  // build graph
  for (let i = 0; i < words.length - 1; i++) {
    const s1 = words[i];
    const s2 = words[i + 1];
    const len = Math.min(s1.length, s2.length);
    for (let j = 0; j < len; j++) {
      const c1 = s1[j];
      const c2 = s2[j];
      if (c1 !== c2) {
        let set = [];
        if (c1 in graph) set = graph[c1];
        if (!set.includes(c2)) {
          set.push(c2);
          graph[c1] = set;
          degree[c2] += 1;
        }
        break;
      }
    }
  }
  // console.log(graph);
  // console.log(degree);
  for (const key in degree) {
    if (degree[key] === 0) q.push(key);
  }

  while (q.length) {
    const c = q.shift();
    res += c;
    if (graph[c]) {
      for (const c2 of graph[c]) {
        degree[c2] -= 1;
        if (degree[c2] === 0) q.push(c2);
      }
    }
  }
  
  return res.length !== Object.keys(degree).length ? '' : res;
};

// 5/30/2017
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = [];
  const map = {};
  for (const w of words) {
    for (const c of w) map[c] = 0;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const len = Math.min(w1.length, w2.length);
    for (let j = 0; j < len; j++) {
      const c1 = w1[j];
      const c2 = w2[j];
      if (c1 !== c2) {
        const set = graph[c1] || [];
        if (!set.includes(c2)) {
          set.push(c2);
          map[c2]++;
          graph[c1] = set;
        }
        break;
      }
    }
  }
  const q = [];
  Object.keys(map).forEach(k => map[k] === 0 && q.push(k));
  let res = '';
  while (q.length) {
    const k = q.shift();
    res += k;
    if (graph[k]) {
      for (const c of graph[k]) {
        map[c]--;
        if (map[c] === 0) q.push(c);
      }
    }
  }
  return res.length === Object.keys(map).length ? res : '';
};