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