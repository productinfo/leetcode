// graph
// DFS
// find if there is a cycle in undirected graph
const validTree = (n, edges) => {
  const visited = [];
  const adjList = [];
  // build graph
  for (let i = 0; i < n; i++) {
    adjList.push([]);
  }

  // has cycle
  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const hasCycle = (u, parent) => {
    visited[u] = true;
    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];
      if (
        (visited[v] && parent !== v) ||
        (!visited[v] && hasCycle(v, u))
      ) {
        return true;
      }
    }
    return false;
  };

  if (hasCycle(0, -1)) return false;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) return false;
  }

  return true;
};

// 5/30/2017
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const graph = [];
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (let j = 0; j < edges.length; j++) {
    const u = edges[j][0];
    const v = edges[j][1];
    graph[u].push(v);
    graph[v].push(u);
  }
  const hasCycle = (u, parent) => {
    visited[u] = true;
    for (let j = 0; j < graph[u].length; j++) {
      const v = graph[u][j];
      if (
        (visited[v] && v !== parent) || (!visited[v] && hasCycle(v, u))
      ) {
        return true;
      }
    }
    return false;
  };
  
  if (hasCycle(0, -1)) return false;

  return visited.every(v => !!v);
};

// 6/12/2017
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const graph = [];
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (let j = 0; j < edges.length; j++) {
    graph[edges[j][0]].push(edges[j][1]);
    graph[edges[j][1]].push(edges[j][0]);
  }
  const hasCycle = (node, parent) => {
    visited[node] = true;
    for (let j = 0; j < graph[node].length; j++) {
      const u = graph[node][j];
      if (u === parent) continue;
      if (visited[u] || hasCycle(u, node)) return true;
    }
    return false;
  };
  if (hasCycle(0, -1)) return false;
  return visited.every(v => v);
};