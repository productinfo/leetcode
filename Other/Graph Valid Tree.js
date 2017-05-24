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