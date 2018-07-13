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


// 6/11/2018
/**
 * @param {number[][]} graph
 * @return {boolean}
 * 
 * 
 * 
 * [[1,3], [0,2], [1,3], [0,2]]
 * 0       1      2      3
 */
var isBipartite = function(graph) {
  const mark = [];
  const dfs = (pos, label) => {
    if (mark[pos] !== undefined) return mark[pos] === label;
    mark[pos] = label;
    for (const next of graph[pos] || []) {
      if (!dfs(next, -label)) return false;
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (mark[i] === undefined && !dfs(i, 1)) return false;
  }
  return true;
};

