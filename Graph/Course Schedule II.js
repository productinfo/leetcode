const findOrder = (numCourses, prerequisites) => {
  const q = [];
  const graph = [];
  const degree = Array.from({ length: numCourses }, v => 0);
  const res = [];

  for (let i = 0; i < numCourses; i++) {
    graph.push([]);
  }

  // build graph
  // build indegree
  for (let i = 0; i < prerequisites.length; i++) {
    degree[prerequisites[i][1]] += 1;
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    const course = q.shift();
    res.unshift(course);
    for (let i = 0; i < graph[course].length; i++) {
      const pointer = graph[course][i];
      degree[pointer] -= 1;
      if (degree[pointer] === 0) q.push(pointer);
    }
  }
  return res.length !== numCourses ? [] : res;
};

// 4/13/2017
const findOrder = (numCourses, prerequisites) => {
  const graph = [];
  const indegree = Array.from({ length: numCourses }, v => 0);
  for (let i = 0; i < numCourses; i++) {
    graph.push([]);
  }
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
    indegree[prerequisites[i][1]] += 1;
  }
  let q = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) q.push(i);
  }
  const res = [];
  while (q.length) {
    const v = q.shift();
    res.unshift(v);
    for (let k = 0; k < graph[v].length; k++) {
      const p = graph[v][k];
      indegree[p] -= 1;
      if (indegree[p] === 0) q.push(p);
    }
  }
  return res.length === numCourses ? res : [];
};