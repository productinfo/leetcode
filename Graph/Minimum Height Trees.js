// timeout
var findMinHeightTrees = function(n, edges) {
  const graph = {};
  for (const [a, b] of edges) {
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[a].push(b);
    graph[b].push(a);
  }

  let min = Infinity;
  let index = -1;
  const res = [];

  const bfs = root => {
    const q = [root];
    const visited = [];
    let level = -1;
    while (q.length) {
      const size = q.length;
      level++;
      for (let j = 0; j < size; j++) {
        const u = q.shift();
        visited[u] = true;
        for (const v of graph[u] || []) {
          if (visited[v]) continue;
          q.push(v);
        }
      }
    }
    res.push(level);
    min = Math.min(min, level);
  };

  for (let i = 0; i < n; i++) {
    bfs(i);
  }

  const ans = [];
  for (let i = 0; i < n; i++) {
    if (res[i] === min) ans.push(i);
  }
  return ans;
};


//
var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];
  const graph = {};
  for (const [a, b] of edges) {
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[a].push(b);
    graph[b].push(a);
  }

  let leaves = Object.keys(graph).filter(u => graph[u].length === 1).map(u => +u);
  
  while (n > 2) {
    n -= leaves.length;
    const newLeaves = [];
    for (const u of leaves) {
      const v = graph[u].pop();
      graph[v] = graph[v].filter(x => x !== u);
      if (graph[v].length === 1) newLeaves.push(v);
    }
    leaves = newLeaves
  }

  return leaves;
};
