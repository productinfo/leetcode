// build graph
// do dfs

var calcEquation = function(equations, values, queries) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[a].push({
      edge: b,
      value: values[i]
    });
    graph[b].push({
      edge: a,
      value: 1 / values[i]
    });
  }
  const dfs = (start, end, val, visited) => {
    if (start in visited) return -1;
    if (!(start in graph)) return -1;

    if (start === end) return val;

    visited[start] = 0;
    for (const node of graph[start] || []) {
      const res = dfs(node.edge, end, val * node.value, visited);
      if (res !== -1) return res;
      
    }
    delete visited[start];
    return -1;
  };
  const res = [];
  for (const [a, b] of queries) {
    const visited = {};
    res.push(dfs(a, b, 1, visited));
  }
  return res;
};


// 4/30/2018
var calcEquation = function(equations, values, queries) {
  const map = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    map[a] = map[a] || [];
    map[b] = map[b] || [];
    map[a].push({
      end: b,
      value: values[i]
    });
    map[b].push({
      end: a,
      value: 1 / values[i]
    });
  }
  
  const res = [];

  const dfs = (begin, end, val, visited) => {
    if (begin === end) return val;
    if (begin in visited) return -1;
    visited[begin] = 0;
    for (const node of map[begin]) {
      const ans = dfs(node.end, end, val * node.value, visited);
      if (ans !== -1) return ans;
    }
    delete visited[begin];
    return -1;
  }
  for (const [start, end] of queries) {
    res.push(
      (!(start in map) || !(end in map)) ? -1 : dfs(start, end, 1, {})
    );
  }

  return res;
};
