// DFS
var isBipartite = function(graph) {
  const mark = Array(graph.length).fill(0);
  const valid = (node, index) => {
    if (mark[node] !== 0) return mark[node] === index;
    mark[node] = index;
    for (const next of graph[node]) {
      if (!valid(next, -index)) return false;
    }
    return true;
  };
  for (let i = 0; i < graph.length; i++) {
    if (mark[i] === 0 && !valid(i, 1)) return false;
  }
  return true;
};
