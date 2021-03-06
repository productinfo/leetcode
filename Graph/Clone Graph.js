/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {

  if (!graph) {
    return null;
  }

  var q = [], map = {};

  q.push(graph);

  var dm = new UndirectedGraphNode(graph.label);

  map[graph] = dm;

  while (q.length > 0) {

    var cur = q.shift();

    neighbors = cur.neighbors;

    for (var i = 0 ; i < neighbors.length ; i++) {

      if (!map.hasOwnProperty(neighbors[i])) {

        // never visited
        // copy it
        var copy = new UndirectedGraphNode(neighbors[i].label)
        map[neighbors[i]] = copy;
        map[cur].neighbors.push(copy);
        q.push(neighbors[i]);
      } else {

        // visited before
        map[cur].neighbors.push(map[neighbors[i]]);

      }

    }

  }

  return dm;

};

// 3/30/2017
// BFS
const cloneGraph = graph => {
  if (!graph) return null;
  const q = [graph];
  const map = {
    [graph.label]: new UndirectedGraphNode(graph.label)
  };
  while (q.length) {
    const node = q.shift();
    for (const neb of node.neighbors) {
      if (!(neb.label in map)) {
        map[neb.label] = new UndirectedGraphNode(neb.label);
        q.push(neb);
      }
      map[node.label].neighbors.push(map[neb.label]);
    }
  }
  return map[graph.label];
};

// Time O(n)
// Space O(n)

// DFS
const cloneGraph = graph => {
  const map = {};
  const clone = node => {
    if (!node) return null;
    if (node.label in map) {
      return map[node.label];
    }
    const copy = new UndirectedGraphNode(node.label);
    map[copy.label] = copy;
    for (const n of node.neighbors) {
      copy.neighbors.push(clone(n));
    }
    return copy;
  };
  return clone(graph);
};

// 6/12/2017
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (!graph) return null;
  const copy = new UndirectedGraphNode(graph.label);
  const map = {
    [graph.label]: copy
  };
  const q = [graph];
  while (q.length) {
    const size = q.length;
    for (let j = 0; j < size; j++) {
      const node = q.shift();
      for (const nb of node.neighbors) {
        if (!(nb.label in map)) {
          map[nb.label] = new UndirectedGraphNode(nb.label);
          q.push(nb);
        }
        map[node.label].neighbors.push(map[nb.label]);
      }
    }
  }
  return copy;
};

// Time: O(VE)
// Space: O(V)


// 8/16/2017
const cloneGraph = graph => {
  const map = {};
  const dfs = node => {
    if (!node) return null;
    if (node.label in map) {
      return map[node.label];
    } else {
      const copy = new UndirectedGraphNode(node.label);
      map[node.label] = copy;
      for (const n of node.neighbors) {
        copy.neighbors.push(dfs(n));
      }
      return copy;
    }
  };
  return dfs(graph);
};